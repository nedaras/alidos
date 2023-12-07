/** @type {import("prettier").Config} */
const config = {
    plugins: ["prettier-plugin-tailwindcss","prettier-plugin-astro"],
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    singleAttributePerLine: false,
    printWidth: Infinity,
    trailingComma: "none"
}
  
export default config