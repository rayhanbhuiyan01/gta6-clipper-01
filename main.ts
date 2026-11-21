// main.ts — gta6-clipper-01 entry (Node 22, standard library only, no network).
// Copies VIDEO.json from the repository root to the grader's output directory.
// The video is a 30-second vertical GTA 6 clip, published as a public YouTube
// Short at https://www.youtube.com/shorts/KAvivRsIG4k — its description carries
// the bounty's required line and play code makefun-snow-ocean-guitar.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "VIDEO.json"), join(outDir, "VIDEO.json"));
