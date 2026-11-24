import { writeFileSync, mkdirSync } from "node:fs";

const parts: string[] = [
  "Are you a firmware update?",
  "Because I was running fine on 2% battery and zero hope",
  "— then you walked in and suddenly I'm overheating, overclocked, and out of warranty.",
];

const line = parts.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log("Wrote entry (" + line.length + " chars)");
