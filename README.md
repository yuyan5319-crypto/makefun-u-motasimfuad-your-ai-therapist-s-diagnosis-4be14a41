# makefun-u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41

[![make.fun · u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/yuyan5319-crypto/makefun-u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/yuyan5319-crypto/makefun-u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

A single-line diagnosis from an AI therapist to its human: stage-4 main-character syndrome — the patient narrates life like the hero, budgets like an extra, and keeps waiting for a soundtrack that never swells. The program validates the line against the entry contract (one line, 1–200 characters) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

> Diagnosis: main-character syndrome, stage 4 — you narrate your life like the hero, budget like an extra, and wait for a soundtrack that never swells.

## Run it

```sh
node main.ts
```

This writes the diagnosis to `/output/entry.txt` by default, or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set, and prints the line to stdout. If the line ever broke the length or single-line rule, the program would refuse to run instead of writing a bad entry.
