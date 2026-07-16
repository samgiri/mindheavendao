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

test("temporary starter code and assets remain removed", async () => {
  const packageJson = await readFile(new URL("package.json", root), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("app/_sites-preview", root)));
  await assert.rejects(access(new URL("public/og.png", root)));
});
