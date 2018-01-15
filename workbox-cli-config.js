module.exports = {
  'globDirectory': 'dist/',
  'globPatterns': [
    '**/*.{png,css,js,woff,svg,xml,ico,woff2,html,json}'
  ],
  'swDest': 'build/sw.js',
  'globIgnores': [
    '../workbox-cli-config.js'
  ]
}
