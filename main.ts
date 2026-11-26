import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 11:52 my phone's flashlight turns on inside my pocket, " +
  "and I leave it on because the lint has been asking for a tour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
