module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
    // 'plugin:vue/recommended'

  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'default',
        'index',
        'about'
      ]
    }]
    // 'vue/no-reserved-props': ['error', {
    // vueVersion: 2 // or 2
    // }],
    // 'vue/first-attribute-linebreak': ['error', {
    // singleline: 'ignore',
    // multiline: 'below'
    // }]
  }
}
