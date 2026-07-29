"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./system.module.css";

type View = "overview" | "identity" | "governance" | "contributions" | "treasury";
type EthereumProvider = {
  request: (request: { method: string; params?: unknown[] }) => Promise<unknown>;
};

const NAV: { id: View; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "identity", label: "Identity", icon: "◎" },
  { id: "governance", label: "Governance", icon: "◇" },
  { id: "contributions", label: "Contributions", icon: "✦" },
  { id: "treasury", label: "Transparency", icon: "↗" },
];

const PROPOSALS = [
  { id: "MHP-001", title: "Founding Community Code of Conduct", category: "Governance", status: "Review", progress: 74, votes: "12 / 16", closes: "4 days" },
  { id: "MHP-002", title: "Phase 1 Wellness Research Circle", category: "Ecosystem", status: "Discussion", progress: 58, votes: "—", closes: "8 days" },
  { id: "MHP-003", title: "Public Documentation Standard", category: "Operations", status: "Passed", progress: 91, votes: "15 / 16", closes: "Complete" },
];

const CONTRIBUTIONS = [
  { title: "Foundation Charter review", area: "Governance", points: 120, date: "Jul 27" },
  { title: "AI wellness research notes", area: "Research", points: 85, date: "Jul 24" },
  { title: "Community onboarding feedback", area: "Community", points: 45, date: "Jul 21" },
];

function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function SystemApp() {
  const [view, setView] = useState<View>("overview");
  const [address, setAddress] = useState("");
  const [notice, setNotice] = useState("");
  const [voted, setVoted] = useState<string[]>([]);
  const [demoMode, setDemoMode] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem("mhd-demo-wallet");
      const storedVotes = window.localStorage.getItem("mhd-demo-votes");
      if (stored) setAddress(stored);
      if (storedVotes) setVoted(JSON.parse(storedVotes) as string[]);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const participation = useMemo(() => 62 + voted.length * 4, [voted]);

  async function connectWallet() {
    const ethereum = (window as Window & { ethereum?: EthereumProvider }).ethereum;
    if (!ethereum) {
      const demoAddress = "0x7A2f8E91c4D5b630F84a1B2c9D3e6F1120A44E6B";
      window.localStorage.setItem("mhd-demo-wallet", demoAddress);
      setAddress(demoAddress);
      setNotice("Demo identity activated. Install MetaMask to test a real wallet connection.");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" }) as string[];
      if (accounts[0]) {
        window.localStorage.setItem("mhd-demo-wallet", accounts[0]);
        setAddress(accounts[0]);
        setDemoMode(false);
        setNotice("Wallet connected for identity preview. No transaction was requested.");
      }
    } catch {
      setNotice("Wallet connection was cancelled. No changes were made.");
    }
  }

  function disconnect() {
    window.localStorage.removeItem("mhd-demo-wallet");
    setAddress("");
    setDemoMode(true);
    setNotice("Identity disconnected from this browser.");
  }

  function castVote(id: string) {
    if (!address) {
      setNotice("Connect your identity before recording a prototype vote.");
      return;
    }
    if (voted.includes(id)) return;
    const next = [...voted, id];
    setVoted(next);
    window.localStorage.setItem("mhd-demo-votes", JSON.stringify(next));
    setNotice(`Prototype vote recorded for ${id}. This is local demo data, not an on-chain vote.`);
  }

  function navigate(next: View) {
    setView(next);
    setMobileNav(false);
    setNotice("");
  }

  return (
    <main className={styles.shell}>
      <aside className={`${styles.sidebar} ${mobileNav ? styles.sidebarOpen : ""}`}>
        <div className={styles.brand}>
          <Image src="/mindheaven-official-logo.png" alt="MindHeavenDAO" width={240} height={150} priority />
        </div>
        <p className={styles.workspace}>Founder Workspace <span>Phase 1 Prototype</span></p>
        <nav aria-label="Founder system navigation">
          {NAV.map(item => (
            <button key={item.id} className={view === item.id ? styles.activeNav : ""} onClick={() => navigate(item.id)}>
              <i>{item.icon}</i><span>{item.label}</span>{item.id === "governance" && <small>3</small>}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFoot}>
          <div><span className={styles.liveDot} /> Prototype online</div>
          <Link href="/">← Return to website</Link>
          <p>Technology advisory<br/><b>SatoshiLab.ai</b></p>
        </div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <button className={styles.menu} onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle menu">☰</button>
          <div><span className={styles.status}>TEST ENVIRONMENT</span><small>No financial transactions · No live tokens</small></div>
          <button className={address ? styles.walletConnected : styles.wallet} onClick={address ? disconnect : connectWallet}>
            <i />{address ? shortAddress(address) : "Connect identity"}
          </button>
        </header>

        {notice && <div className={styles.notice} role="status">{notice}<button onClick={() => setNotice("")}>×</button></div>}

        <div className={styles.content}>
          {view === "overview" && <Overview address={address} participation={participation} onNavigate={navigate} onConnect={connectWallet} />}
          {view === "identity" && <Identity address={address} demoMode={demoMode} onConnect={connectWallet} onDisconnect={disconnect} />}
          {view === "governance" && <Governance voted={voted} onVote={castVote} />}
          {view === "contributions" && <Contributions />}
          {view === "treasury" && <Transparency />}
        </div>
      </section>
    </main>
  );
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className={styles.intro}><div><p>{eyebrow}</p><h1>{title}</h1></div><span>{copy}</span></div>;
}

function Overview({ address, participation, onNavigate, onConnect }: { address: string; participation: number; onNavigate: (view: View) => void; onConnect: () => void }) {
  return <>
    <PageIntro eyebrow="Welcome to the foundation layer" title="Founder overview" copy="A calm command center for identity, contribution, governance, and transparent coordination." />
    {!address && <section className={styles.activation}>
      <div><span>01 · ACTIVATE IDENTITY</span><h2>Begin with a wallet-ready member identity.</h2><p>Connect a wallet or use demo mode. No transaction, signature, payment, or token approval will be requested.</p></div>
      <button onClick={onConnect}>Connect identity <i>↗</i></button>
    </section>}
    <div className={styles.metrics}>
      <article><span>Participation readiness</span><strong>{participation}%</strong><div><i style={{ width: `${participation}%` }} /></div><small>Foundation phase</small></article>
      <article><span>Open proposals</span><strong>02</strong><small>1 awaiting founder review</small></article>
      <article><span>Contribution score</span><strong>250</strong><small>Prototype recognition points</small></article>
      <article><span>Transparency reports</span><strong>04</strong><small>All records current</small></article>
    </div>
    <div className={styles.overviewGrid}>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>GOVERNANCE PULSE</span><h2>Active proposals</h2></div><button onClick={() => onNavigate("governance")}>View all ↗</button></div>
        {PROPOSALS.slice(0, 2).map(p => <div className={styles.compactProposal} key={p.id}><small>{p.id}</small><div><strong>{p.title}</strong><span>{p.category} · closes in {p.closes}</span></div><i>{p.progress}%</i></div>)}
      </section>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>YOUR ACTIVITY</span><h2>Recent contributions</h2></div><button onClick={() => onNavigate("contributions")}>View log ↗</button></div>
        {CONTRIBUTIONS.map(c => <div className={styles.activity} key={c.title}><i>✦</i><div><strong>{c.title}</strong><span>{c.area} · {c.date}</span></div><b>+{c.points}</b></div>)}
      </section>
    </div>
    <section className={styles.advisory}><span>TECHNOLOGY ADVISORY</span><strong>SatoshiLab.ai</strong><p>Architecture, responsible technology, blockchain systems, and ecosystem implementation guidance.</p><i>Independent review and governance approval remain required.</i></section>
  </>;
}

function Identity({ address, demoMode, onConnect, onDisconnect }: { address: string; demoMode: boolean; onConnect: () => void; onDisconnect: () => void }) {
  return <>
    <PageIntro eyebrow="Member layer · privacy by design" title="Founder identity" copy="A wallet-ready identity preview designed around consent, minimum data, and transparent permissions." />
    <div className={styles.identityGrid}>
      <section className={styles.identityCard}>
        <div className={styles.avatar}>SG</div>
        <span className={address ? styles.verified : styles.pending}>{address ? "IDENTITY ACTIVE" : "NOT CONNECTED"}</span>
        <h2>Founding Member</h2><p>{address ? shortAddress(address) : "Connect a wallet or activate demo identity"}</p>
        <button onClick={address ? onDisconnect : onConnect}>{address ? "Disconnect identity" : "Activate identity"}</button>
        <small>{address && demoMode ? "Demo identity stored only in this browser." : address ? "Wallet address used only for this preview." : "No personal profile data is required."}</small>
      </section>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>PERMISSION MODEL</span><h2>Your controls</h2></div></div>
        {[
          ["Wallet address", address ? "Connected" : "Not shared", address ? "active" : ""],
          ["Profile visibility", "Private by default", "active"],
          ["Governance eligibility", address ? "Prototype enabled" : "Requires identity", address ? "active" : ""],
          ["Financial permission", "Never requested", "safe"],
          ["Health information", "Not collected", "safe"],
        ].map(row => <div className={styles.permission} key={row[0]}><span>{row[0]}</span><strong className={row[2] ? styles[row[2]] : ""}>{row[1]}</strong></div>)}
      </section>
    </div>
  </>;
}

function Governance({ voted, onVote }: { voted: string[]; onVote: (id: string) => void }) {
  return <>
    <PageIntro eyebrow="Community voice · structured action" title="Governance" copy="Review proposals, understand their status, and test the founder voting journey before any on-chain implementation." />
    <div className={styles.governanceSummary}><div><span>Eligible founders</span><strong>16</strong></div><div><span>Participation target</span><strong>67%</strong></div><div><span>Passed proposals</span><strong>01</strong></div><p>Prototype voting is browser-local and carries no legal, financial, treasury, or on-chain effect.</p></div>
    <div className={styles.proposalList}>{PROPOSALS.map(p => <article key={p.id} className={styles.proposal}>
      <div className={styles.proposalMeta}><span>{p.id}</span><b>{p.status}</b></div>
      <div><small>{p.category}</small><h2>{p.title}</h2><p>Review the proposal purpose, safeguards, accountable owner, timeline, and measurable outcome before expressing a decision.</p></div>
      <div className={styles.voteLine}><span><i style={{ width: `${p.progress}%` }} /></span><small>{p.progress}% support · {p.votes} recorded</small></div>
      <footer><span>{p.closes === "Complete" ? "Decision complete" : `Closes in ${p.closes}`}</span><button disabled={p.status === "Passed" || voted.includes(p.id)} onClick={() => onVote(p.id)}>{voted.includes(p.id) ? "Vote recorded ✓" : p.status === "Passed" ? "Passed ✓" : "Support proposal"}</button></footer>
    </article>)}</div>
  </>;
}

function Contributions() {
  const [submitted, setSubmitted] = useState(false);
  return <>
    <PageIntro eyebrow="Contribution before speculation" title="Contribution record" copy="Recognize useful work across research, governance, community, wellness, technology, and education." />
    <div className={styles.contributionLayout}>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>ACTIVITY LEDGER</span><h2>Your prototype record</h2></div><strong>250 points</strong></div>
        {CONTRIBUTIONS.map(c => <div className={styles.contributionRow} key={c.title}><span>{c.date}</span><div><strong>{c.title}</strong><small>{c.area}</small></div><b>+{c.points}</b><i>Verified</i></div>)}
      </section>
      <section className={styles.submitCard}>
        <span>SUBMIT CONTRIBUTION</span><h2>{submitted ? "Contribution received." : "What did you help move forward?"}</h2>
        <p>{submitted ? "This prototype submission is not stored on a server. The production flow will require evidence and reviewer validation." : "Phase 1 uses review-based recognition. Points are non-financial and do not represent tokens, ownership, or a promise of reward."}</p>
        <button onClick={() => setSubmitted(!submitted)}>{submitted ? "Submit another" : "Preview submission flow"} <i>↗</i></button>
      </section>
    </div>
  </>;
}

function Transparency() {
  return <>
    <PageIntro eyebrow="Open records · accountable execution" title="Transparency center" copy="A prototype view of treasury categories, governance reporting, and system readiness—without presenting simulated funds as real." />
    <div className={styles.disclaimer}><b>DEMO DATA</b><p>No treasury wallet, member funds, token sale, or financial activity is connected to this interface.</p></div>
    <div className={styles.transparencyGrid}>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>PLANNED ALLOCATION POLICY</span><h2>Treasury categories</h2></div><small>Illustrative only</small></div>
        {[["Research & wellness", 32], ["Technology & security", 28], ["Community programs", 18], ["Operations", 12], ["Reserve", 10]].map(x => <div className={styles.allocation} key={x[0]}><span>{x[0]}</span><div><i style={{ width: `${x[1]}%` }} /></div><strong>{x[1]}%</strong></div>)}
      </section>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span>SYSTEM READINESS</span><h2>Control status</h2></div></div>
        {[["Public activity reporting", "Prototype ready"], ["Multisig treasury", "Not configured"], ["Independent audit", "Required"], ["Mainnet contracts", "Not deployed"], ["Legal review", "Required before launch"]].map((x, i) => <div className={styles.control} key={x[0]}><i className={i === 0 ? styles.ready : ""}>{i === 0 ? "✓" : "○"}</i><span>{x[0]}</span><strong>{x[1]}</strong></div>)}
      </section>
    </div>
  </>;
}
