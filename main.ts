// Funniest Time Machine Warning Label — make.fun entry.
// Writes a single warning label (100 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Do not kill your grandfather. Ticket refunded, seat erased, funeral billed to your account.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
