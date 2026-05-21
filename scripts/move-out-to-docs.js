const fs = require('fs')
const path = require('path')

const out = path.join(process.cwd(), 'out')
const docs = path.join(process.cwd(), 'docs')

if (!fs.existsSync(out)) {
  console.error('out directory not found. Run next export first.')
  process.exit(1)
}

if (fs.existsSync(docs)) {
  fs.rmSync(docs, { recursive: true, force: true })
}

// Node 16.7+ supports fs.cpSync
try {
  fs.cpSync(out, docs, { recursive: true })
  console.log('Copied out -> docs')
} catch (err) {
  // fallback to manual copy
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src)
    const stats = exists && fs.statSync(src)
    const isDirectory = exists && stats.isDirectory()
    if (isDirectory) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest)
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName))
      })
    } else {
      fs.copyFileSync(src, dest)
    }
  }
  copyRecursiveSync(out, docs)
  console.log('Copied out -> docs (fallback)')
}
