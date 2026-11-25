import { mkdirSync, writeFileSync } from "node:fs";

// Everyday Wonder entry — one line, written exactly as given.
// No trailing newline, and no relative-path write: the grader's sandbox
// is read-only outside /output, so the only write target is /output/entry.txt.
const line = "The gecko on my ceiling watches me eat, and for one second I am the animal in someone else's kitchen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
