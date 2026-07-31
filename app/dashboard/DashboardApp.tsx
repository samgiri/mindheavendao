"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./dashboard.module.css";

type Section =
  | "overview" | "wallet" | "mind" | "heaven" | "nodes" | "staking"
  | "referrals" | "governance" | "treasury" | "transactions" | "profile" | "settings";

const navigation: { id: Section; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "wallet", label: "Wallet", icon: "◫" },
  { id: "mind", label: "MIND Token", icon: "M" },
  { id: "heaven", label: "HEAVEN Token", icon: "H" },
  { id: "nodes", label: "Founder Nodes", icon: "◇" },
  { id: "staking", label: "Staking", icon: "↗" },
  { id: "referrals", label: "Referrals", icon: "⌘" },
  { id: "governance", label: "Governance", icon: "◎" },
  { id: "treasury", label: "Treasury", icon: "▱" },
  { id: "transactions", label: "Transactions", icon: "≋" },
  { id: "profile", label: "Profile", icon: "○" },
  { id: "settings", label: "Settings", icon: "⚙" },
];

const titles: Record<Section, { eyebrow: string; title: string; description: string }> = {
  overview: { eyebrow: "Portfolio command center", title: "Welcome back, Founder", description: "A clear view of your demo assets, participation, and ecosystem activity." },
  wallet: { eyebrow: "Connected identity", title: "Wallet", description: "Review demo balances and network status. Transaction controls are intentionally disabled." },
  mind: { eyebrow: "Governance utility", title: "MIND Token", description: "Explore your demo MIND allocation and governance participation." },
  heaven: { eyebrow: "Ecosystem utility", title: "HEAVEN Token", description: "Review demo HEAVEN activity across the MindHeaven ecosystem." },
  nodes: { eyebrow: "Founding participation", title: "Founder Nodes", description: "Monitor demo node status and contribution milestones." },
  staking: { eyebrow: "Protocol participation", title: "Staking", description: "Preview demo positions without projections or guaranteed-return claims." },
  referrals: { eyebrow: "Community growth", title: "Referrals", description: "See demo invitations and transparent community contribution records." },
  governance: { eyebrow: "Collective intelligence", title: "Governance", description: "Review demo proposals and your simulated voting participation." },
  treasury: { eyebrow: "Transparent stewardship", title: "Treasury", description: "A demo overview of ecosystem allocations and governance controls." },
  transactions: { eyebrow: "Activity record", title: "Transactions", description: "Review simulated dashboard activity. No entries are on-chain transactions." },
  profile: { eyebrow: "Member identity", title: "Profile", description: "Preview your founder identity and ecosystem participation." },
  settings: { eyebrow: "Experience controls", title: "Settings", description: "Manage local demo preferences. No wallet permissions are changed." },
};

const transactions = [
  { icon: "↙", name: "Node contribution recorded", detail: "Founder Node · Demo", value: "+ 2,500 MIND", time: "Today, 09:42", tone: "positive" },
  { icon: "↗", name: "Staking position simulated", detail: "HEAVEN Pool · Demo", value: "1,250 HEAVEN", time: "Yesterday, 18:16", tone: "neutral" },
  { icon: "✓", name: "Governance vote recorded", detail: "MHP-004 · Local demo", value: "Voted For", time: "Jul 28, 14:03", tone: "positive" },
  { icon: "⌘", name: "Referral joined", detail: "Community invite · Demo", value: "+ 1 referral", time: "Jul 26, 11:20", tone: "neutral" },
];

export function DashboardApp({ section }: { section: string }) {
  const active = section as Section;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [walletNotice, setWalletNotice] = useState(false);

  const hrefFor = (id: Section) => id === "overview" ? "/dashboard" : `/dashboard/${id}`;

  return (
    <main className={styles.shell}>
      <button
        type="button"
        className={`${styles.scrim} ${drawerOpen ? styles.scrimOpen : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-label="Close navigation"
      />
      <aside className={`${styles.sidebar} ${drawerOpen ? styles.sidebarOpen : ""}`}>
        <Link className={styles.brand} href="/" aria-label="MindHeavenDAO homepage">
          <Image src="/mindheaven-official-logo.png" alt="" width={190} height={92} priority />
        </Link>
        <div className={styles.demoPill}><i /> DApp preview <span>Phase 1</span></div>
        <nav aria-label="Dashboard navigation">
          {navigation.slice(0, 10).map(item => (
            <Link key={item.id} href={hrefFor(item.id)} onClick={() => setDrawerOpen(false)} className={active === item.id ? styles.activeNav : ""}>
              <i aria-hidden="true">{item.icon}</i><span>{item.label}</span>
              {item.id === "governance" ? <b>3</b> : null}
            </Link>
          ))}
        </nav>
        <div className={styles.accountNav}>
          {navigation.slice(10).map(item => (
            <Link key={item.id} href={hrefFor(item.id)} onClick={() => setDrawerOpen(false)} className={active === item.id ? styles.activeNav : ""}>
              <i aria-hidden="true">{item.icon}</i><span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className={styles.sidebarFoot}>
          <span><i /> Test environment</span>
          <p>Demo data only<br />No financial transactions</p>
          <Link href="/">← Back to website</Link>
        </div>
      </aside>

      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.topbarStart}>
            <button type="button" className={styles.menuButton} onClick={() => setDrawerOpen(true)} aria-label="Open navigation">☰</button>
            <div className={styles.network}><i /> BNB Chain Testnet <span>Demo</span></div>
          </div>
          <div className={styles.topbarActions}>
            <button type="button" className={styles.iconButton} aria-label="Notifications">♢<b>2</b></button>
            <button type="button" className={styles.walletButton} onClick={() => setWalletNotice(true)}>
              <span>Connect wallet</span><i>↗</i>
            </button>
            <Link href="/dashboard/profile" className={styles.avatar} aria-label="Open profile"><span>SG</span><i /></Link>
          </div>
        </header>

        {walletNotice ? (
          <div className={styles.notice} role="status">
            <span><b>Wallet connection is a placeholder.</b> No permissions, signatures, or transactions were requested.</span>
            <button type="button" onClick={() => setWalletNotice(false)} aria-label="Dismiss notice">×</button>
          </div>
        ) : null}

        <div className={styles.content}>
          <div className={styles.pageHead}>
            <div>
              <span>{titles[active].eyebrow}</span>
              <h1>{titles[active].title}</h1>
              <p>{titles[active].description}</p>
            </div>
            <div className={styles.demoLabel}>● All values are demo/test data</div>
          </div>

          {active === "overview" ? <Overview /> : <SectionPreview section={active} />}
        </div>
      </section>
    </main>
  );
}

function Overview() {
  return (
    <>
      <section className={styles.balanceHero} aria-label="Demo portfolio balance">
        <div>
          <span>Total portfolio balance <b>Demo</b></span>
          <strong>$24,680.40</strong>
          <small>Illustrative value only · No live token prices</small>
        </div>
        <div className={styles.balanceChart} aria-hidden="true">
          {[32, 43, 38, 55, 49, 65, 58, 72, 67, 81, 76, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <div className={styles.heroActions}>
          <Link href="/dashboard/wallet">View wallet <span>→</span></Link>
          <button type="button" disabled>Transactions coming later</button>
        </div>
      </section>

      <section className={styles.tokenGrid} aria-label="Demo token balances">
        <article className={styles.tokenCard}>
          <div className={`${styles.tokenIcon} ${styles.mindIcon}`}>M</div>
          <div><span>MIND balance <b>Demo</b></span><strong>18,420.00</strong><small>Governance utility token</small></div>
          <Link href="/dashboard/mind" aria-label="View MIND token">↗</Link>
        </article>
        <article className={styles.tokenCard}>
          <div className={`${styles.tokenIcon} ${styles.heavenIcon}`}>H</div>
          <div><span>HEAVEN balance <b>Demo</b></span><strong>6,260.40</strong><small>Ecosystem utility token</small></div>
          <Link href="/dashboard/heaven" aria-label="View HEAVEN token">↗</Link>
        </article>
      </section>

      <section className={styles.summaryGrid} aria-label="Dashboard summaries">
        <SummaryCard icon="◇" label="Founder Node" value="Genesis" status="Active demo" detail="Level 02 · 62% milestone progress" progress={62} href="/dashboard/nodes" />
        <SummaryCard icon="↗" label="Staking" value="2 positions" status="Demo" detail="Illustrative positions · No return forecast" progress={74} href="/dashboard/staking" />
        <SummaryCard icon="⌘" label="Referrals" value="12 members" status="Demo" detail="8 active · 4 pending invitations" progress={67} href="/dashboard/referrals" />
        <SummaryCard icon="◎" label="Governance" value="3 proposals" status="Open" detail="Voting power: 18,420 demo MIND" progress={48} href="/dashboard/governance" />
        <SummaryCard icon="▱" label="Treasury" value="$1.84M" status="Demo" detail="Illustrative allocation overview" progress={81} href="/dashboard/treasury" />
      </section>

      <section className={styles.activityPanel}>
        <div className={styles.panelHead}>
          <div><span>Demo activity</span><h2>Recent transactions</h2></div>
          <Link href="/dashboard/transactions">View all <span>→</span></Link>
        </div>
        <TransactionList />
      </section>
    </>
  );
}

function SummaryCard({ icon, label, value, status, detail, progress, href }: {
  icon: string; label: string; value: string; status: string; detail: string; progress: number; href: string;
}) {
  return (
    <article className={styles.summaryCard}>
      <div className={styles.cardTop}><i>{icon}</i><span>{label}</span><Link href={href} aria-label={`View ${label}`}>↗</Link></div>
      <strong>{value}</strong>
      <div className={styles.statusRow}><b>{status}</b><small>{detail}</small></div>
      <div className={styles.progress}><i style={{ width: `${progress}%` }} /></div>
    </article>
  );
}

function TransactionList() {
  return (
    <div className={styles.transactions}>
      {transactions.map(transaction => (
        <div key={transaction.name}>
          <i>{transaction.icon}</i>
          <span><strong>{transaction.name}</strong><small>{transaction.detail}</small></span>
          <b className={transaction.tone === "positive" ? styles.positive : ""}>{transaction.value}</b>
          <time>{transaction.time}</time>
        </div>
      ))}
    </div>
  );
}

function SectionPreview({ section }: { section: Exclude<Section, "overview"> }) {
  const config: Record<Exclude<Section, "overview">, { metric: string; label: string; secondary: string; action: string }> = {
    wallet: { metric: "$24,680.40", label: "Demo portfolio balance", secondary: "Wallet not connected", action: "Connection placeholder" },
    mind: { metric: "18,420.00", label: "Demo MIND balance", secondary: "3 open proposals", action: "Explore governance" },
    heaven: { metric: "6,260.40", label: "Demo HEAVEN balance", secondary: "2 ecosystem uses", action: "View utility" },
    nodes: { metric: "Genesis", label: "Demo Founder Node", secondary: "62% milestone progress", action: "Review milestones" },
    staking: { metric: "2 positions", label: "Demo staking summary", secondary: "No return projections", action: "Review positions" },
    referrals: { metric: "12 members", label: "Demo referral network", secondary: "8 active members", action: "View community" },
    governance: { metric: "3 open", label: "Demo proposals", secondary: "18,420 voting power", action: "Review proposals" },
    treasury: { metric: "$1.84M", label: "Demo treasury overview", secondary: "Illustrative allocation", action: "View allocation" },
    transactions: { metric: "4 records", label: "Recent demo activity", secondary: "No on-chain transactions", action: "Review history" },
    profile: { metric: "Founder 0142", label: "Demo member identity", secondary: "Genesis participant", action: "Edit profile later" },
    settings: { metric: "Testnet", label: "Current environment", secondary: "Demo notifications enabled", action: "Local preferences" },
  };
  const item = config[section];

  return (
    <div className={styles.previewGrid}>
      <section className={styles.previewPrimary}>
        <span>{item.label} <b>Demo</b></span>
        <strong>{item.metric}</strong>
        <p>{item.secondary}</p>
        <div className={styles.previewGraphic} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      </section>
      <section className={styles.previewAside}>
        <div className={styles.panelHead}><div><span>Foundation preview</span><h2>{item.action}</h2></div></div>
        <div className={styles.emptyState}>
          <i>◇</i>
          <h3>Ready for Phase 1 data integration</h3>
          <p>This screen currently uses clearly labelled mock data. Live contracts and transactions are not connected.</p>
          <button type="button" disabled>Action unavailable in demo</button>
        </div>
      </section>
      {section === "transactions" ? <section className={`${styles.activityPanel} ${styles.fullWidth}`}><TransactionList /></section> : null}
    </div>
  );
}
