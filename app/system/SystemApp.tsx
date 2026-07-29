"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  CONTRIBUTIONS,
  DOCUMENTS,
  NAVIGATION,
  NODE_TIERS,
  PROPOSALS,
  READINESS,
  type Proposal,
  type View,
} from "./dapp-data";
import styles from "./system.module.css";

type EthereumProvider = {
  request: (request: { method: string; params?: unknown[] }) => Promise<unknown>;
  on?: (event: string, listener: (...args: unknown[]) => void) => void;
  removeListener?: (event: string, listener: (...args: unknown[]) => void) => void;
};

type WalletState = {
  address: string;
  chainId: string;
  mode: "disconnected" | "demo" | "wallet";
};

const BSC_TESTNET_CHAIN_ID = "0x61";
const BSC_MAINNET_CHAIN_ID = "0x38";
const DEMO_ADDRESS = "0x7A2f8E91c4D5b630F84a1B2c9D3e6F1120A44E6B";

function shortAddress(address: string) {
  return address ? `${address.slice(0, 6)}…${address.slice(-4)}` : "";
}

function chainLabel(chainId: string) {
  if (chainId === BSC_TESTNET_CHAIN_ID) return "BSC Testnet";
  if (chainId === BSC_MAINNET_CHAIN_ID) return "BSC Mainnet";
  if (chainId) return `Chain ${Number.parseInt(chainId, 16)}`;
  return "No network";
}

function getProvider() {
  return (window as Window & { ethereum?: EthereumProvider }).ethereum;
}

export function SystemApp() {
  const [view, setView] = useState<View>("dashboard");
  const [wallet, setWallet] = useState<WalletState>({ address: "", chainId: "", mode: "disconnected" });
  const [notice, setNotice] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [voted, setVoted] = useState<Record<string, "for" | "against" | "abstain">>({});
  const [walletPanel, setWalletPanel] = useState(false);

  useEffect(() => {
    const storedAddress = window.localStorage.getItem("mhd-demo-wallet") ?? "";
    const storedVotes = window.localStorage.getItem("mhd-demo-votes-v2");
    if (storedAddress) setWallet({ address: storedAddress, chainId: BSC_TESTNET_CHAIN_ID, mode: "demo" });
    if (storedVotes) {
      try {
        setVoted(JSON.parse(storedVotes) as Record<string, "for" | "against" | "abstain">);
      } catch {
        window.localStorage.removeItem("mhd-demo-votes-v2");
      }
    }

    const provider = getProvider();
    if (!provider) return;

    const onAccounts = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      if (!accounts?.[0]) {
        setWallet({ address: "", chainId: "", mode: "disconnected" });
        return;
      }
      setWallet(current => ({ ...current, address: accounts[0], mode: "wallet" }));
    };
    const onChain = (...args: unknown[]) => {
      setWallet(current => ({ ...current, chainId: String(args[0] ?? "") }));
    };

    provider.on?.("accountsChanged", onAccounts);
    provider.on?.("chainChanged", onChain);
    return () => {
      provider.removeListener?.("accountsChanged", onAccounts);
      provider.removeListener?.("chainChanged", onChain);
    };
  }, []);

  const readinessScore = useMemo(() => {
    const complete = READINESS.filter(item => item.tone === "ready").length;
    return Math.round((complete / READINESS.length) * 100);
  }, []);

  async function connectWallet() {
    const provider = getProvider();
    if (!provider) {
      window.localStorage.setItem("mhd-demo-wallet", DEMO_ADDRESS);
      setWallet({ address: DEMO_ADDRESS, chainId: BSC_TESTNET_CHAIN_ID, mode: "demo" });
      setWalletPanel(false);
      setNotice("Demo identity activated locally. No wallet, signature, transaction, or payment was requested.");
      return;
    }

    try {
      const [accounts, chainId] = await Promise.all([
        provider.request({ method: "eth_requestAccounts" }) as Promise<string[]>,
        provider.request({ method: "eth_chainId" }) as Promise<string>,
      ]);
      if (accounts[0]) {
        window.localStorage.removeItem("mhd-demo-wallet");
        setWallet({ address: accounts[0], chainId, mode: "wallet" });
        setWalletPanel(false);
        setNotice("Wallet connected for identity and network preview. No transaction was requested.");
      }
    } catch {
      setNotice("Wallet connection was cancelled. Nothing changed.");
    }
  }

  async function switchToTestnet() {
    const provider = getProvider();
    if (!provider || wallet.mode !== "wallet") {
      setNotice("A wallet extension is required to switch networks. Demo mode already previews BSC Testnet.");
      return;
    }
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: BSC_TESTNET_CHAIN_ID }],
      });
      setWallet(current => ({ ...current, chainId: BSC_TESTNET_CHAIN_ID }));
      setNotice("Connected to BNB Smart Chain Testnet. Contract actions remain disabled.");
    } catch (error) {
      const code = (error as { code?: number }).code;
      if (code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: BSC_TESTNET_CHAIN_ID,
              chainName: "BNB Smart Chain Testnet",
              nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
              rpcUrls: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
              blockExplorerUrls: ["https://testnet.bscscan.com"],
            }],
          });
          setWallet(current => ({ ...current, chainId: BSC_TESTNET_CHAIN_ID }));
          setNotice("BNB Smart Chain Testnet added. Contract actions remain disabled.");
          return;
        } catch {
          setNotice("The network could not be added. No transaction was attempted.");
          return;
        }
      }
      setNotice("Network switch was cancelled. No transaction was attempted.");
    }
  }

  function disconnect() {
    window.localStorage.removeItem("mhd-demo-wallet");
    setWallet({ address: "", chainId: "", mode: "disconnected" });
    setWalletPanel(false);
    setNotice("Identity disconnected from this interface. Wallet permissions are managed inside your wallet.");
  }

  function navigate(next: View) {
    setView(next);
    setMobileNav(false);
    setNotice("");
  }

  function recordVote(id: string, choice: "for" | "against" | "abstain") {
    if (!wallet.address) {
      setWalletPanel(true);
      setNotice("Connect an identity before using the governance simulation.");
      return;
    }
    const next = { ...voted, [id]: choice };
    setVoted(next);
    window.localStorage.setItem("mhd-demo-votes-v2", JSON.stringify(next));
    setNotice(`Prototype vote recorded (${choice}) for ${id}. It is local browser data, not an on-chain vote.`);
  }

  const connectedToTarget = wallet.chainId === BSC_TESTNET_CHAIN_ID;

  return (
    <main className={styles.shell}>
      <aside className={`${styles.sidebar} ${mobileNav ? styles.sidebarOpen : ""}`}>
        <div className={styles.brand}>
          <Image src="/mindheaven-official-logo.png" alt="MindHeavenDAO" width={250} height={150} priority />
        </div>
        <div className={styles.productLabel}>
          <span>FOUNDER DAPP</span>
          <b>Phase 2 · Testnet ready UI</b>
        </div>
        <nav aria-label="Founder dApp navigation">
          {NAVIGATION.map(item => (
            <button
              key={item.id}
              className={view === item.id ? styles.activeNav : ""}
              onClick={() => navigate(item.id)}
            >
              <i>{item.icon}</i><span>{item.label}</span>
              {item.id === "governance" && <small>{PROPOSALS.filter(p => p.stage !== "Passed").length}</small>}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFoot}>
          <div><span className={styles.liveDot} /> Interface operational</div>
          <Link href="/">← Return to website</Link>
          <p>Technology advisory<br /><b>SatoshiLab.ai</b></p>
        </div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <button className={styles.menu} onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle menu">☰</button>
          <div className={styles.environment}>
            <span className={styles.status}>TEST ENVIRONMENT</span>
            <small>No live contracts · No financial transactions</small>
          </div>
          <div className={styles.topActions}>
            {wallet.address && (
              <button className={connectedToTarget ? styles.networkOk : styles.networkWarn} onClick={switchToTestnet}>
                <i />{chainLabel(wallet.chainId)}
              </button>
            )}
            <button className={wallet.address ? styles.walletConnected : styles.wallet} onClick={() => setWalletPanel(true)}>
              <i />{wallet.address ? shortAddress(wallet.address) : "Connect identity"}
            </button>
          </div>
        </header>

        {notice && <div className={styles.notice} role="status"><span>{notice}</span><button onClick={() => setNotice("")}>×</button></div>}

        <div className={styles.content}>
          {view === "dashboard" && <Dashboard wallet={wallet} readinessScore={readinessScore} navigate={navigate} connect={() => setWalletPanel(true)} />}
          {view === "identity" && <Identity wallet={wallet} connect={() => setWalletPanel(true)} disconnect={disconnect} switchNetwork={switchToTestnet} />}
          {view === "nodes" && <FounderNodes wallet={wallet} />}
          {view === "governance" && <Governance wallet={wallet} voted={voted} recordVote={recordVote} />}
          {view === "contributions" && <Contributions />}
          {view === "rewards" && <Rewards />}
          {view === "treasury" && <Treasury />}
          {view === "documents" && <Documents />}
        </div>
      </section>

      {walletPanel && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setWalletPanel(false)}>
          <section className={styles.walletModal} role="dialog" aria-modal="true" aria-labelledby="wallet-title" onMouseDown={event => event.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setWalletPanel(false)} aria-label="Close wallet panel">×</button>
            <span>IDENTITY CONNECTION</span>
            <h2 id="wallet-title">{wallet.address ? "Connected identity" : "Enter the founder workspace"}</h2>
            <p>Connecting proves wallet access for this interface only. MindHeavenDAO will not request a payment, token approval, seed phrase, or private key.</p>
            {wallet.address ? (
              <>
                <div className={styles.connectedCard}><i /><div><small>{wallet.mode === "demo" ? "Demo identity" : "Wallet identity"}</small><strong>{shortAddress(wallet.address)}</strong><span>{chainLabel(wallet.chainId)}</span></div></div>
                <button className={styles.secondaryAction} onClick={disconnect}>Disconnect interface</button>
              </>
            ) : (
              <>
                <button className={styles.primaryAction} onClick={connectWallet}>Connect browser wallet <b>↗</b></button>
                <button className={styles.secondaryAction} onClick={() => {
                  window.localStorage.setItem("mhd-demo-wallet", DEMO_ADDRESS);
                  setWallet({ address: DEMO_ADDRESS, chainId: BSC_TESTNET_CHAIN_ID, mode: "demo" });
                  setWalletPanel(false);
                  setNotice("Demo identity activated locally. No financial permission was requested.");
                }}>Continue in demo mode</button>
              </>
            )}
            <small className={styles.safetyNote}>Production identity, eligibility, and compliance rules remain subject to approved specifications.</small>
          </section>
        </div>
      )}
    </main>
  );
}

function PageIntro({ eyebrow, title, copy, tag }: { eyebrow: string; title: string; copy: string; tag?: string }) {
  return <div className={styles.intro}><div><p>{eyebrow}</p><h1>{title}</h1></div><div>{tag && <small>{tag}</small>}<span>{copy}</span></div></div>;
}

function Dashboard({ wallet, readinessScore, navigate, connect }: { wallet: WalletState; readinessScore: number; navigate: (view: View) => void; connect: () => void }) {
  return <>
    <PageIntro eyebrow="MindHeavenDAO · Founder command center" title="Mission control" copy="One calm interface for identity, nodes, governance, contribution, rewards, treasury transparency, and official records." tag="PHASE 2" />
    {!wallet.address && <section className={styles.activation}>
      <div><span>START HERE</span><h2>Connect your identity to preview the complete founder journey.</h2><p>No signature, token approval, payment, or transaction will be requested.</p></div>
      <button onClick={connect}>Connect identity <i>↗</i></button>
    </section>}
    <div className={styles.metrics}>
      <article><span>Deployment readiness</span><strong>{readinessScore}%</strong><div><i style={{ width: `${readinessScore}%` }} /></div><small>1 of 6 launch controls ready</small></article>
      <article><span>Governance</span><strong>02</strong><small>Prototype proposals open</small></article>
      <article><span>Contribution record</span><strong>250</strong><small>Non-financial demo points</small></article>
      <article><span>Network target</span><strong>BSC</strong><small>Testnet integration mode</small></article>
    </div>
    <div className={styles.dashboardGrid}>
      <section className={styles.panel}>
        <PanelHead eyebrow="PRODUCT READINESS" title="Launch control board" action="View treasury" onClick={() => navigate("treasury")} />
        <div className={styles.readinessList}>{READINESS.map(item => <div key={item.label}><i className={styles[item.tone]} /><span>{item.label}</span><strong>{item.state}</strong></div>)}</div>
      </section>
      <section className={styles.panel}>
        <PanelHead eyebrow="GOVERNANCE PULSE" title="Active proposals" action="Open governance" onClick={() => navigate("governance")} />
        {PROPOSALS.slice(0, 2).map(proposal => <button className={styles.proposalCompact} key={proposal.id} onClick={() => navigate("governance")}><small>{proposal.id}</small><div><strong>{proposal.title}</strong><span>{proposal.className} · {proposal.closes}</span></div><b>{proposal.support}%</b></button>)}
      </section>
    </div>
    <section className={styles.quickActions}>
      {[
        ["◇", "Founder Nodes", "Review tiers and contract readiness", "nodes"],
        ["✦", "Contribution", "Record useful ecosystem work", "contributions"],
        ["◌", "Rewards", "Inspect funded-reward safeguards", "rewards"],
        ["≡", "Documents", "Read the source-of-record index", "documents"],
      ].map(item => <button key={item[1]} onClick={() => navigate(item[3] as View)}><i>{item[0]}</i><div><strong>{item[1]}</strong><span>{item[2]}</span></div><b>↗</b></button>)}
    </section>
    <section className={styles.advisory}><span>TECHNOLOGY ADVISORY</span><strong>SatoshiLab.ai</strong><p>Architecture, blockchain and AI guidance, security planning, and implementation support.</p><i>Independent audits, legal review, and governance approval remain required.</i></section>
  </>;
}

function PanelHead({ eyebrow, title, action, onClick }: { eyebrow: string; title: string; action?: string; onClick?: () => void }) {
  return <div className={styles.panelHead}><div><span>{eyebrow}</span><h2>{title}</h2></div>{action && <button onClick={onClick}>{action} ↗</button>}</div>;
}

function Identity({ wallet, connect, disconnect, switchNetwork }: { wallet: WalletState; connect: () => void; disconnect: () => void; switchNetwork: () => void }) {
  return <>
    <PageIntro eyebrow="Privacy by design · Wallet ready" title="Founder identity" copy="A consent-based identity layer that exposes only the minimum information needed for the current action." />
    <div className={styles.identityGrid}>
      <section className={styles.identityCard}>
        <div className={styles.avatar}>{wallet.address ? wallet.address.slice(2, 4).toUpperCase() : "MH"}</div>
        <span className={wallet.address ? styles.verified : styles.pending}>{wallet.address ? "IDENTITY ACTIVE" : "NOT CONNECTED"}</span>
        <h2>{wallet.address ? "Founding Member" : "Activate identity"}</h2>
        <p>{wallet.address ? shortAddress(wallet.address) : "Wallet or browser-local demo identity"}</p>
        <button onClick={wallet.address ? disconnect : connect}>{wallet.address ? "Disconnect interface" : "Connect identity"}</button>
        <small>{wallet.mode === "demo" ? "Demo identity is stored only in this browser." : wallet.mode === "wallet" ? "No payment or token approval permission was requested." : "No personal profile or health information is required."}</small>
      </section>
      <section className={styles.panel}>
        <PanelHead eyebrow="PERMISSION MODEL" title="Your controls" />
        {[
          ["Wallet address", wallet.address ? shortAddress(wallet.address) : "Not shared", wallet.address],
          ["Network", wallet.address ? chainLabel(wallet.chainId) : "Not connected", wallet.chainId === BSC_TESTNET_CHAIN_ID],
          ["Profile visibility", "Private by default", true],
          ["Governance", wallet.address ? "Simulation enabled" : "Requires identity", Boolean(wallet.address)],
          ["Financial permission", "Never requested", true],
          ["Health information", "Not collected", true],
        ].map(row => <div className={styles.permission} key={String(row[0])}><span>{row[0]}</span><strong className={row[2] ? styles.safeText : ""}>{row[1]}</strong></div>)}
        {wallet.address && wallet.chainId !== BSC_TESTNET_CHAIN_ID && <button className={styles.inlineAction} onClick={switchNetwork}>Switch to BSC Testnet ↗</button>}
      </section>
    </div>
  </>;
}

function FounderNodes({ wallet }: { wallet: WalletState }) {
  return <>
    <PageIntro eyebrow="Founder layer · Specification preview" title="Founder Nodes" copy="A complete product journey for comparing, preparing, and eventually managing Founder Node positions after legal review and audited deployment." tag="CONTRACTS NOT DEPLOYED" />
    <div className={styles.disclaimer}><b>REFERENCE MODEL</b><p>Package values are business-planning references. Exact MIND requirements, payment assets, locks, rewards, withdrawal rules, and legal terms remain open decisions.</p></div>
    <div className={styles.nodeGrid}>{NODE_TIERS.map((tier, index) => <article key={tier.name} className={index === 2 ? styles.featuredNode : ""}>
      <div><span>{String(index + 1).padStart(2, "0")}</span>{index === 2 && <b>CORE PATH</b>}</div>
      <small>{tier.reference} reference</small><h2>{tier.name}</h2><p>{tier.purpose}</p>
      <ul><li>365 / 730-day options proposed</li><li>Governance eligibility subject to rules</li><li>HEAVEN funding model unresolved</li></ul>
      <button disabled>{wallet.address ? "Awaiting audited contracts" : "Connect identity first"}</button>
      <i>{tier.state}</i>
    </article>)}</div>
    <section className={styles.process}>
      <PanelHead eyebrow="SAFE ACTIVATION PATH" title="From specification to active node" />
      <div>{["Approve economics", "Complete legal review", "Deploy audited contracts", "Connect eligible identity", "Open governed position"].map((step, i) => <article key={step}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong>{i < 4 && <i>→</i>}</article>)}</div>
    </section>
  </>;
}

function Governance({ wallet, voted, recordVote }: { wallet: WalletState; voted: Record<string, "for" | "against" | "abstain">; recordVote: (id: string, choice: "for" | "against" | "abstain") => void }) {
  const [selected, setSelected] = useState<Proposal>(PROPOSALS[0]);
  return <>
    <PageIntro eyebrow="Community voice · Accountable execution" title="Governance" copy="Explore the complete proposal and voting experience using clearly marked local prototype data." tag="OFF-CHAIN SIMULATION" />
    <div className={styles.governanceStats}><div><span>Voting model</span><strong>1 MIND · 1 vote</strong></div><div><span>Ordinary quorum</span><strong>10%</strong></div><div><span>Voting period</span><strong>7 days</strong></div><div><span>Execution delay</span><strong>48 hours</strong></div></div>
    <div className={styles.governanceLayout}>
      <section className={styles.proposalList}>{PROPOSALS.map(proposal => <button key={proposal.id} className={selected.id === proposal.id ? styles.selectedProposal : ""} onClick={() => setSelected(proposal)}><div><small>{proposal.id}</small><b>{proposal.stage}</b></div><strong>{proposal.title}</strong><span>{proposal.className} · {proposal.closes}</span></button>)}</section>
      <article className={styles.proposalDetail}>
        <div className={styles.proposalMeta}><span>{selected.id} · {selected.className}</span><b>{selected.stage}</b></div>
        <h2>{selected.title}</h2><p>{selected.summary}</p>
        <div className={styles.voteProgress}><span><i style={{ width: `${selected.support}%` }} /></span><small>{selected.support}% support · {selected.turnout} recorded</small></div>
        <div className={styles.voteActions}>
          {(["for", "against", "abstain"] as const).map(choice => <button key={choice} disabled={selected.stage === "Passed"} className={voted[selected.id] === choice ? styles.voteSelected : ""} onClick={() => recordVote(selected.id, choice)}>{voted[selected.id] === choice ? "Recorded: " : ""}{choice}</button>)}
        </div>
        <small className={styles.prototypeNote}>{wallet.address ? "Your choice is stored only in this browser." : "Connect identity to test the voting journey."} No on-chain or legal effect.</small>
      </article>
    </div>
  </>;
}

function Contributions() {
  const [submitted, setSubmitted] = useState(false);
  return <>
    <PageIntro eyebrow="Contribution before speculation" title="Contribution record" copy="Recognize useful work with review, evidence, privacy, and appeal controls—without turning points into financial promises." />
    <div className={styles.contributionLayout}>
      <section className={styles.panel}><PanelHead eyebrow="ACTIVITY LEDGER" title="Prototype record" />
        {CONTRIBUTIONS.map(item => <div className={styles.contributionRow} key={item.title}><span>{item.date}</span><div><strong>{item.title}</strong><small>{item.area}</small></div><b>+{item.points}</b><i>{item.state}</i></div>)}
      </section>
      <section className={styles.submitCard}><span>CONTRIBUTION FLOW</span><h2>{submitted ? "Preview received." : "What did you help move forward?"}</h2><p>{submitted ? "No evidence or personal data was uploaded. Production submissions require a minimised evidence model and appeal process." : "Points shown here are non-financial prototype recognition and do not represent tokens, ownership, or guaranteed rewards."}</p><button onClick={() => setSubmitted(!submitted)}>{submitted ? "Reset preview" : "Preview submission"} <i>↗</i></button></section>
    </div>
  </>;
}

function Rewards() {
  return <>
    <PageIntro eyebrow="Funded liabilities · No guarantees" title="Rewards center" copy="A transparent readiness view for future HEAVEN-based rewards. No balance, APY, claim, or earning is represented as live." tag="SPECIFICATION OPEN" />
    <div className={styles.rewardHero}><div><span>AVAILABLE TO CLAIM</span><strong>—</strong><small>No live reward vault connected</small></div><button disabled>Claims unavailable</button></div>
    <div className={styles.rewardGrid}>
      {[["Founder Node rewards", "Funding and formula open", "OD-06–OD-10"], ["Direct referral", "Eligible base and qualification open", "OD-04–OD-05"], ["MindGlobal Pool", "Points and verification open", "OD-20–OD-21"]].map(item => <article key={item[0]}><span>{item[2]}</span><h2>{item[0]}</h2><p>{item[1]}</p><div><i /><small>Not activated</small></div></article>)}
    </div>
    <section className={styles.safeguards}><PanelHead eyebrow="NON-NEGOTIABLE CONTROLS" title="Reward safety" /><div>{["HEAVEN only","Pre-funded epochs","No guaranteed APY","Finalized periods immutable","Liabilities ≤ funding","Independent economic review"].map(item => <span key={item}>✓ {item}</span>)}</div></section>
  </>;
}

function Treasury() {
  return <>
    <PageIntro eyebrow="Transparent records · Bounded authority" title="Treasury & readiness" copy="A control center for deployment status and future reporting—not a representation of live assets or member funds." />
    <div className={styles.disclaimer}><b>NO LIVE TREASURY</b><p>No treasury wallet, token sale, liquidity position, member deposit, or financial activity is connected to this interface.</p></div>
    <div className={styles.transparencyGrid}>
      <section className={styles.panel}><PanelHead eyebrow="OPERATING-SURPLUS GUIDANCE" title="Policy categories" />
        {[["HEAVEN reward funding",60],["Ecosystem growth",25],["Emergency reserve",15]].map(item => <div className={styles.allocation} key={String(item[0])}><span>{item[0]}</span><div><i style={{ width: `${item[1]}%` }} /></div><strong>{item[1]}%</strong></div>)}
        <small className={styles.prototypeNote}>Indicative governance-controlled guidance. It creates no entitlement and cannot authorize unfunded rewards.</small>
      </section>
      <section className={styles.panel}><PanelHead eyebrow="DEPLOYMENT CONTROLS" title="Readiness register" />
        <div className={styles.readinessList}>{READINESS.map(item => <div key={item.label}><i className={styles[item.tone]} /><span>{item.label}</span><strong>{item.state}</strong></div>)}</div>
      </section>
    </div>
  </>;
}

function Documents() {
  return <>
    <PageIntro eyebrow="GitHub · Official source of record" title="Document center" copy="A public-facing index for foundational records, governance controls, audits, and future protocol specifications." />
    <div className={styles.documentGrid}>{DOCUMENTS.map(doc => <a key={doc.id} href={doc.id === "MHC-000" ? "https://github.com/samgiri/mindheavendao/blob/main/docs/constitution/MHC-000_GOVERNANCE_CONSTITUTION.md" : doc.id === "MHR-001" ? "https://github.com/samgiri/mindheavendao/blob/main/docs/reviews/MHR-001_MHC-000_INTERNAL_AUDIT.md" : "https://github.com/samgiri/mindheavendao/tree/main/docs/foundation"} target="_blank" rel="noreferrer"><div><span>{doc.id}</span><b>{doc.status}</b></div><h2>{doc.name}</h2><p>{doc.group}</p><i>Open record ↗</i></a>)}</div>
    <section className={styles.recordPolicy}><span>REPOSITORY POLICY</span><h2>Every material decision should leave a professional trail.</h2><p>Drafts remain marked, approved records are versioned, and code or documents are changed through branches, commits, reviews, and pull requests.</p><a href="https://github.com/samgiri/mindheavendao" target="_blank" rel="noreferrer">Open GitHub repository ↗</a></section>
  </>;
}
