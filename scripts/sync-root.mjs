import { cp, readdir, rm, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const scriptsDir = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptsDir, "..")
const outDir = path.join(projectRoot, "out")

if (!existsSync(outDir)) {
  throw new Error("Cannot sync GitHub Pages root because the out directory does not exist.")
}

const rootGeneratedPaths = [
  ".nojekyll",
  "404",
  "404.html",
  "_next",
  "index.html",
]

await writeFile(path.join(outDir, ".nojekyll"), "")

for (const generatedPath of rootGeneratedPaths) {
  await rm(path.join(projectRoot, generatedPath), { recursive: true, force: true })
}

for (const entry of await readdir(outDir)) {
  await cp(path.join(outDir, entry), path.join(projectRoot, entry), { recursive: true })
}

console.log("Synced static export from out/ to the repository root for GitHub Pages.")
