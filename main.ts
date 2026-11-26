// Your AI Therapist's Diagnosis — one-line entry.
// Writes the diagnosis to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and prints it to stdout.
// Refuses to run if the line breaks the entry contract:
// a single line of 1-200 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Diagnosis: main-character syndrome, stage 4 — you narrate your life like the hero, budget like an extra, and wait for a soundtrack that never swells.";

function charCount(line: string): number {
  // Count code points, not UTF-16 units, so the gate's
  // "1 to 200 characters" is measured the same way it counts.
  return [...line].length;
}

function validate(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("refusing to run: diagnosis is empty or only whitespace");
  }
  const n = charCount(line);
  if (n > 200) {
    throw new Error(
      `refusing to run: diagnosis is ${n} characters, over the 200-character limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("refusing to run: diagnosis must be a single line");
  }
  for (const ch of line) {
    if (ch.codePointAt(0)! < 0x20) {
      throw new Error(
        "refusing to run: diagnosis contains a control character",
      );
    }
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Round-trip: what landed on disk must be exactly the validated line.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("refusing to run: entry.txt on disk differs from the diagnosis");
  }
  validate(written);
  console.log(LINE);
}

main();
