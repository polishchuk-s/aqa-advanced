import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
//import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: [
      "node_modules/**", 
      "2-hw-git_basics/**", 
      "3-hw-nodeBasics/**", 
      "4-hw-jsBasics/**",
      "5-hw-conditions-and-loops/**",
      "6-hw-intro-to-functions/**",
      "7-hw-advanced-functions/**",
      "8-hw-arrays/**",
      "9-hw-objects/**",
      "10-hw-oop-in-js/**"
    ],
  },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  //pluginReact.configs.flat.recommended,
  {
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		}
	},
]);