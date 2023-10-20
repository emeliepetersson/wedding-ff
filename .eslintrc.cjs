module.exports = {
  env: {
      browser: true,
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "import", "eslint-plugin-react"],
  overrides: [
      {
          "files": ["**/*.tsx"],
          "rules": {
              "react/prop-types": "off"
          }
      }
  ],
  rules: {
      // https://eslint.org/docs/rules/function-paren-newline
  "function-paren-newline": ["error", "multiline-arguments"],

      // https://eslint.org/docs/rules/camelcase
      "camelcase": "off",

      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
      "@typescript-eslint/naming-convention": ["error",
          {
              "selector": "default",
              "format": ["camelCase"]
          },
          {
              "selector": "variable",
              "format": ["snake_case", "camelCase", "UPPER_CASE", "PascalCase"],
          },
          {
              "selector": "parameter",
              "format": ["camelCase"],
              "leadingUnderscore": "allow"
          },
          {
              "selector": "typeLike",
              "format": ["PascalCase"]
          },
          {
              "selector": "property",
              "format": ["snake_case", "camelCase"],
          },
          {
              "selector": "interface",
              "format": ["PascalCase"],
              "custom": {
                  "regex": "^I[A-Z]",
                  "match": false,
              }
          },
          {
              "selector": "enumMember",
              "format": ["UPPER_CASE"]
          }
      ],
  
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  // https://eslint.org/docs/rules/indent
      "@typescript-eslint/indent": ["error", "tab", {
          "SwitchCase": 1,
          "VariableDeclarator": 1,
          "outerIIFEBody": 1,
          "MemberExpression": 1,
          "FunctionDeclaration": {
            "parameters": 1,
            "body": 1
          },
          "FunctionExpression": {
            "parameters": 1,
            "body": 1
          },
          "CallExpression": {
            "arguments": 1
          },
          "ArrayExpression": 1,
          "ObjectExpression": 1,
          "ImportDeclaration": 1,
          "flatTernaryExpressions": false,
          // Excluded from ignoredNodes are the following in order to have Fragments indetented the way we like them
          // 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment'
          "ignoredNodes": ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
          "ignoreComments": false
        }],

  // https://eslint.org/docs/rules/quotes
  "quotes": ["error", "single"],

  // https://eslint.org/docs/rules/no-console
  "no-console": ["error", { "allow": ["warn", "error"] }],

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/order.md
  "import/order": ["error", {
    "newlines-between": "never",
    "groups": ["external", "index", "sibling", "parent", "internal", "builtin", "object"]
  }],

      // https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/namespace.md
      "import/namespace": "off",

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
  "import/no-anonymous-default-export": ["error", {
    "allowArray": false,
    "allowArrowFunction": false,
    "allowAnonymousClass": false,
    "allowAnonymousFunction": false,
    "allowCallExpression": true, // The true value here is for backward compatibility
    "allowLiteral": false,
    "allowObject": false
  }],
  
  // https://eslint.org/docs/rules/jsx-quotes
  "jsx-quotes": ["error", "prefer-double"],
  
  // https://eslint.org/docs/rules/keyword-spacing
  "keyword-spacing": ["error", { 
    "overrides": { 
      "if": { 
        "after": false 
      }, 
      "for": { 
        "after": false 
      }, 
      "while": { 
        "after": false 
      },
      "catch": {
        "after": false
      },
      "switch": {
        "after": false
      }
    } 
  }],
  
  // https://eslint.org/docs/rules/space-in-parens
  "space-in-parens": ["error", "never"],

      // https://eslint.org/docs/rules/space-infix-ops
      "space-infix-ops": ["error", { "int32Hint": false }],
  
  // https://eslint.org/docs/rules/array-bracket-spacing
  "array-bracket-spacing": ["error", "never"],
  
  // https://eslint.org/docs/rules/object-curly-spacing
  "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],

  // https://eslint.org/docs/rules/comma-spacing
  "comma-spacing": ["error", { "before": false, "after": true }],

  // https://eslint.org/docs/rules/no-multiple-empty-lines
  "no-multiple-empty-lines": ["error", { "max": 1 }],
  
  // https://eslint.org/docs/rules/comma-dangle
  "comma-dangle": ["error", {
    "arrays": "never",
    "objects": "never",
    "imports": "never",
    "exports": "never",
    "functions": "never"
  }],
  
  // https://eslint.org/docs/rules/semi
  "semi": ["error", "always"],
  
  // https://eslint.org/docs/rules/no-var
  "no-var": "error",
  
  // https://eslint.org/docs/rules/no-nested-ternary
  "no-nested-ternary": "error",
  
  // https://eslint.org/docs/rules/space-before-blocks
  "space-before-blocks": ["error", {
    "functions": "always", 
    "keywords": "always", 
    "classes": "always" 
    }
  ],

  // https://eslint.org/docs/rules/arrow-spacing
  "arrow-spacing": ["error", { "before": true, "after": true }],

      // https://eslint.org/docs/latest/rules/func-style
      "func-style": ["error", "expression"],

      // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      "prefer-arrow-callback": "error",	

    // https://eslint.org/docs/rules/no-unused-vars
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
      "react/jsx-curly-newline": ["error", {
          "multiline": 'consistent',
          "singleline": 'consistent',
      }],

      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
      "react/jsx-tag-spacing": ["error", {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never",
          "beforeClosing": "never",
      }],

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  "react/jsx-indent": ["error", "tab", { "checkAttributes": false, "indentLogicalExpressions": true }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  "react/jsx-indent-props": ["error", "tab"],
  
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
      "react/jsx-max-props-per-line": ["error"],
      
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
      "react/jsx-closing-tag-location": ["error"],

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
      "react/jsx-closing-bracket-location": ["error"],

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
      "react/jsx-first-prop-new-line": ["error"],

      //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
      "react/jsx-one-expression-per-line": ["error", { "allow": "none" }],

  // https://www.npmjs.com/package/eslint-plugin-react-hooks
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",

      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      "react/jsx-wrap-multilines": ["error", {
          "declaration": "parens-new-line",
          "assignment": "parens-new-line",
          "return": "parens-new-line",
          "arrow": "parens-new-line",
          "condition": "parens-new-line",
          "logical": "parens-new-line",
          "prop": "parens-new-line" 
      }],
  },
};

