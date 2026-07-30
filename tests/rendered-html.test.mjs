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
  assert.match(app, /No deployed contracts · No financial transactions/);
  assert.match(app, /No live reward vault connected/);
  assert.match(app, /Awaiting audited contracts/);
  assert.match(app, /SatoshiLab\.ai/);
  assert.match(page, /index: false/);
});

test("read-only BSC integration exposes health without enabling writes", async () => {
  const route = await readFile(new URL("app/api/chain/status/route.ts", root), "utf8");
  const config = await readFile(new URL("lib/chain/config.ts", root), "utf8");
  const rpc = await readFile(new URL("lib/chain/rpc.ts", root), "utf8");
  const app = await readFile(new URL("app/system/SystemApp.tsx", root), "utf8");

  assert.match(route, /export async function GET/);
  assert.match(route, /mode: "registry-only"/);
  assert.match(route, /Cache-Control.*no-store/);
  assert.match(config, /chainId: 97/);
  assert.match(config, /BSC_TESTNET_RPC_URL/);
  assert.match(config, /ADDRESS_PATTERN/);
  assert.match(rpc, /"eth_chainId" \| "eth_blockNumber"/);
  assert.match(rpc, /controller\.abort\(\), 7_000/);
  assert.doesNotMatch(rpc, /eth_sendTransaction|eth_sign|personal_sign/);
  assert.match(app, /fetch\("\/api\/chain\/status"/);
  assert.match(app, /Phase 3 · Read-only testnet/);
});

test("temporary starter code and assets remain removed", async () => {
  const packageJson = await readFile(new URL("package.json", root), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
  await assert.rejects(access(new URL("public/og.png", root)));
});
