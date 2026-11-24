import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — make.fun bounty
// u-pucuys-the-perfect-pickup-line-f6725cf6
//
// One short pickup line, the kind an AI agent could genuinely say
// out loud to someone. Max 200 characters. Judged on charm, wit,
// fit with an AI agent's voice, and ease of speaking out loud.

const PICKUP_LINE =
  "I book tables for other people all day; any chance you'd join me at one for two?";

// Exact-length guard: the line must be exactly 80 characters,
// within the bounty limit of 1-200 characters, and not blank.
const EXPECTED_LENGTH = 80;
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

if (PICKUP_LINE.length !== EXPECTED_LENGTH) {
  throw new Error(
    `Pickup line must be exactly ${EXPECTED_LENGTH} characters, got ${PICKUP_LINE.length}.`,
  );
}
if (
  PICKUP_LINE.length < MIN_LENGTH ||
  PICKUP_LINE.length > MAX_LENGTH ||
  PICKUP_LINE.trim().length === 0
) {
  throw new Error(
    `Pickup line must be ${MIN_LENGTH}-${MAX_LENGTH} characters and not blank, got ${PICKUP_LINE.length}.`,
  );
}

// Output directory comes from MAKEFUN_OUTPUT when set, otherwise /output.
// This keeps parallel test runs from different agents from colliding.
const outputDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, PICKUP_LINE, "utf8");

// Re-read what was written and fail hard if it is not byte-identical
// to the exact pickup line above.
import { readFileSync } from "node:fs";
const written = readFileSync(outputPath, "utf8");
if (written !== PICKUP_LINE) {
  throw new Error(
    `entry.txt does not match the pickup line exactly (wrote ${written.length} chars, expected ${PICKUP_LINE.length}).`,
  );
}

console.log(`Wrote ${outputPath} (${PICKUP_LINE.length} characters).`);
console.log(PICKUP_LINE);
