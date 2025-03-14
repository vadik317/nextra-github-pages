const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  // 2. Enable static export
  output: 'export',
  images: {
    unoptimized: true,
  },
};
