import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("homepage baseline preserves the approved brand and complete story", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /mindheaven-official-logo\.png/);
  assert.match(page, /Human intelligence,<br\/>\s*<em>evolved\.<\/em>/);
  for (const id of ["home", "problem", "vision", "solution", "ecosystem", "community", "governance", "token", "roadmap", "faq", "contact"]) {
    assert.match(page, new RegExp(`id=["']${id}["']`));
  }
});

test("founder dapp includes the complete Phase 2 product surface and safety boundaries", async () => {
  const app = await readFile(new URL("app/system/SystemApp.tsx", root), "utf8");
  const data = await readFile(new URL("app/system/dapp-data.ts", root), "utf8");
  const page = await readFile(new URL("app/system/page.tsx", root), "utf8");

  for (const surface of ["Dashboard", "Identity", "Founder Nodes", "Governance", "Contributions", "Rewards", "Treasury", "Documents"]) {
    assert.match(data, new RegExp(`label: "${surface}"`));
  }

  assert.match(app, /BSC_TESTNET_CHAIN_ID = "0x61"/);
  assert.match(app, /No live contracts · No financial transactions/);
  assert.match(app, /No live reward vault connected/);
  assert.match(app, /Awaiting audited contracts/);
  assert.match(app, /SatoshiLab\.ai/);
  assert.match(page, /index: false/);
});

test("temporary starter code and assets remain removed", async () => {
  const packageJson = await readFile(new URL("package.json", root), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
  await assert.rejects(access(new URL("public/og.png", root)));
});
