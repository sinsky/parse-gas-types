import { escapeHTML } from "bun";
import fs from "fs";
import path from "path";

const [, , inputFile] = process.argv;

if (!inputFile) {
  console.error("Usage: bun run script.ts <inputFile>");
  process.exit(1);
}

const basePath = path.join(__dirname, "..");
const inputFilePath = path.join(basePath, inputFile);
const rawFileData = fs.readFileSync(inputFilePath, "utf8");

const unescapedContent = rawFileData
  .replace(/\\\\/g, "\\")
  .replace(/\\"/g, '"');

const jsonData: string[][] = JSON.parse(unescapedContent);

function unescapeUnicode(str: string) {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, (match) => {
    return String.fromCharCode(parseInt(match.replace("\\u", ""), 16));
  });
}

const fileData = jsonData[1].map((line) => {
  const [filename, data] = line;
  const unescapedContent = data.replace(/\\n/g, "\n");
  const finalContent = unescapeUnicode(unescapedContent);
  return [filename.trim(), finalContent.trim()];
});

const typesDir = path.join(basePath, "@types");

if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
}

fileData.forEach(([filename, data]) => {
  const filePath = path.join(typesDir, filename);
  fs.writeFileSync(filePath, data, "utf8");
});

console.log("Files have been created successfully.");
