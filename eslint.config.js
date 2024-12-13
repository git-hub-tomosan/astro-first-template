import js from "@eslint/js";
import ts from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      eslintPluginAstro,
      tailwind,
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
    },
    settings: {
      tailwindcss: {
        whitelist: ["js-.+"],
        classRegex: "^(active)?[cC]lass(Name)?$",
      },
    },
  },
];
