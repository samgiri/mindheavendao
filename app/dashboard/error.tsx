"use client";

import styles from "./dashboard.module.css";

export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <main className={styles.statePage}>
      <div className={styles.stateMark}>!</div>
      <h1>Dashboard preview unavailable</h1>
      <p>Demo data could not be displayed. No wallet or transaction was affected.</p>
      <button type="button" onClick={reset}>Try again</button>
    </main>
  );
}
