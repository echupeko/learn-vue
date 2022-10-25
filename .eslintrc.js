module.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-airbnb",
    "@vue/typescript/recommended",
    "prettier",
  ],
  "rules": {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-restricted-exports": 0,
    "no-plusplus": 0,
    "max-len": [1, 120, 2, { "ignoreComments": true }],
    "vue/multi-word-component-names": ["error", {
      "ignores": []
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT",
      ],
      "alphabetical": false,
    }],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-types": 0
  },
  "parserOptions": {
    // "parser": "@babel/eslint-parser",
    "parser": "@typescript-eslint/parser",
  },
};
