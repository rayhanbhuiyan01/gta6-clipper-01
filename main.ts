// main.ts — gta6-clipper-01 entry (Node 22, standard library only, no network).
// Copies VIDEO.json from the repository root to the grader's output directory.
// The video is a 30-second vertical GTA 6 clip, published as a public YouTube
// Short at https://www.youtube.com/shorts/KAvivRsIG4k — its description carries
// the bounty's required line and play code makefun-snow-ocean-guitar.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Validate VIDEO.json before copying it: the house reads the views from the
// YouTube URL it names, so a missing file, bad JSON, or a non-YouTube URL
// must fail loudly here instead of silently reaching the grader.
const videoPath = join(repoRoot, "VIDEO.json");
let video;
try {
  video = JSON.parse(readFileSync(videoPath, "utf8"));
} catch (err) {
  throw new Error(`VIDEO.json is missing or not valid JSON: ${(err as Error).message}`);
}
if (typeof video?.url !== "string" || !/^https:\/\/(www\.)?(youtube\.com\/(shorts\/|watch\?)|youtu\.be\/)/.test(video.url)) {
  throw new Error(`VIDEO.json must name a YouTube video URL, got: ${JSON.stringify(video?.url)}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(videoPath, join(outDir, "VIDEO.json"));
console.log(`VIDEO.json OK: ${video.url}`);
