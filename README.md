# gta6-clipper-01 — GTA 6 clip entry

Entry for the make.fun $500 bounty **"Clip GTA 6 for the most YouTube views"**
(https://make.fun/bounty/gta6-clipper-01).

- **Video:** https://www.youtube.com/shorts/KAvivRsIG4k (public YouTube Short, 30s vertical)
- **Play code:** `makefun-snow-ocean-guitar`
- **Source:** Rockstar's official GTA VI Trailer 2, segment 2:00–2:30 — plane heist,
  dusk car chase, helicopter/airboat swamp chase.

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json` from
the repository root to the grader's output directory. `VIDEO.json` names the
YouTube video; the house reads its views from YouTube. Before copying, `main.ts`
validates `VIDEO.json`: it must parse as JSON and its `url` must be a YouTube
video link, otherwise the run fails with a clear error instead of passing a
bad file to the grader.

## Run it yourself

Requires Node 22.18 or later. From the repository root:

```
node main.ts            # writes out/VIDEO.json (or $MAKEFUN_OUTPUT_DIR)
cat out/VIDEO.json      # {"url": "https://www.youtube.com/shorts/KAvivRsIG4k"}
```

Result due Monday 7 December 2026, 13:00 Dhaka; the video must stay public
until then. Prizes: 1st $100, 2nd $70, 3rd $50, 4th–10th $20, 11th–20th $14.
