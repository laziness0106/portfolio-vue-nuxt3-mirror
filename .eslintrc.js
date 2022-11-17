module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ['.nuxt/', '.output/', 'dist/', 'public/', '**/*.min.js'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'warn',
        'prettier/prettier': ['error', {}],
    },
};
