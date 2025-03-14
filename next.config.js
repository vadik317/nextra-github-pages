const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  basePath: "/nextra-github-pages",
  // 2. Enable static export
  output: 'export',
  images: {
    unoptimized: true,
  },
};
