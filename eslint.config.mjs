import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "_next/**",
      "404/**",
      "404.html",
      "docs/**",
      "index.html",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
    ],
  },
]

export default eslintConfig
