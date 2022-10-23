module.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "extends": [
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-airbnb",
    "prettier",
  ],
  "rules": {
    "no-restricted-exports": 0,
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
  },
  "parserOptions": {
    "parser": "@babel/eslint-parser",
  },
};
