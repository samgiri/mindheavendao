import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const command = process.argv[2];
if (!new Set(["dev", "build", "start"]).has(command)) {
  throw new Error("Expected one of: dev, build, start");
}

const executable = fileURLToPath(new URL(
  process.platform === "win32" ? "../node_modules/.bin/vinext.cmd" : "../node_modules/.bin/vinext",
  import.meta.url,
));
const result = spawnSync(executable, [command], {
  env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
  shell: process.platform === "win32",
  stdio: "inherit",
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
