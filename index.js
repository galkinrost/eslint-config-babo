/* eslint-disable */

module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "mocha"
    ],
    "env": {
        "browser": true,
        "node": false,
        "es6": true,
        "mocha": true
    },
    "ecmaFeatures": {
        "modules": true,
        "jsx": true
    },
    "globals": {
        "global": false,
        "require": false,
        "DEBUG": false,
        "TEST_REGEXP": false
    },
    "rules": {
        // Best Practices
        "array-callback-return": 2,
        "curly": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": [2, "smart"],
        "no-else-return": 2,
        "no-empty-function": 2,
        "no-empty-pattern": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-floating-decimal": 2,
        "no-invalid-this": 2,
        "no-magic-numbers": [2, {"ignore": [-1, 0, 1]}],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-throw-literal": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-native-reassign": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "vars-on-top": 2,
        "no-void": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "yoda": 2,

        // Variables
        "no-shadow": 2,
        "no-unused-vars": 2,

        // Nodejs
        "callback-return": 2,
        "no-mixed-requires": [2, {"grouping": true}],
        "no-path-concat": 2,

        // Code style
        "array-bracket-spacing": [2, "always"],
        "block-spacing": [2, "always"],
        "brace-style": [2, "1tbs", {"allowSingleLine": false}],
        "camelcase": 2,
        "comma-spacing": [2, {"before": false, "after": true}],
        "comma-style": [2, "last"],
        "consistent-this": [2, "self"],
        "func-names": 2,
        "func-style": [2, "declaration", {"allowArrowFunctions": true}],
        "indent": [2, 4, {"SwitchCase": 1}], //4 spaces
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": 2,
        "newline-per-chained-call": [2, {"ignoreChainWithDepth": 3}],
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-negated-condition": 2,
        "no-spaced-func": 2,
        "no-unneeded-ternary": 2,
        "one-var": [2, {
            "uninitialized": "always", // Exactly one declaration for uninitialized variables per function (var) or block (let or const)
            "initialized": "never" // Exactly one declarator per initialized variable declaration per function (var) or block (let or const)
        }],
        "operator-linebreak": [2, "after"],
        "semi-spacing": [2],
        "semi": [2, "never"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,

        "no-negated-condition": 2,
        "no-whitespace-before-property": 2,
        "quotes": [2, "backtick"],
        "sort-imports": [1, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],

        // es6
        "arrow-spacing": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "template-curly-spacing": 2,

        // React
        "react/no-string-refs": 2,
        "react/no-unknown-property": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 2,
        "react/self-closing-comp": 2,
        "react/wrap-multilines": 2,

        // JSX
        "react/jsx-boolean-value": [2, "always"],
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-handler-names": 2,
        "react/jsx-key": 2,
        "react/jsx-no-bind": [2, {"ignoreRefs": true}],
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,

        // Mocha
        "mocha/no-exclusive-tests": 2
    }
}