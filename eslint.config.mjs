import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      files: ['**/*.vue'],
      rules: {
        'vue/block-order': ['error', {
          order: ['template', 'script', 'style'],
        }],
        'vue/html-self-closing': ['error', {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        }],
        'no-unused-vars': 'off',
        'curly': 'all',
      },
    },
    {
      rules: {
        'test/consistent-test-it': ['warning', { fn: 'test' }],
      },
    },
  ),
)
