import styles from "./dashboard.module.css";

export default function DashboardLoading() {
  return (
    <main className={styles.statePage} aria-live="polite">
      <div className={styles.stateMark}>MH</div>
      <div className={styles.loadingLine} />
      <p>Loading dashboard demo…</p>
    </main>
  );
}
