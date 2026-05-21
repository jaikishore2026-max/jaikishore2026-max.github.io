const fs = require('fs')
const path = require('path')

const srcPages = path.join(process.cwd(), '.next', 'server', 'pages')
const srcStatic = path.join(process.cwd(), '.next', 'static')
const dest = path.join(process.cwd(), 'docs')

if (!fs.existsSync(srcPages)) {
  console.error('No .next/server/pages found. Run next build first.')
  process.exit(1)
}

if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true })

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDir = exists && stats.isDirectory()
  if (isDir) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child))
    }
  } else {
    const parent = path.dirname(dest)
    if (!fs.existsSync(parent)) fs.mkdirSync(parent, { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

// Copy HTML pages to docs root
copyRecursive(srcPages, dest)
// Copy _next static assets
if (fs.existsSync(srcStatic)) {
  copyRecursive(srcStatic, path.join(dest, '_next', 'static'))
}

console.log('Copied .next/server/pages and .next/static to docs/')
