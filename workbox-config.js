module.exports = {
  'globDirectory': 'somedir/',
  'swDest': 'build/sw.js',
  'navigateFallback': 'dist/index.html',
  'clientsClaim': true,
  'skipWaiting': true,
  'runtimeCaching': [
    {
      'urlPattern': 'https://cdn.rawgit.com/parcel-bundler/website/01a1f7dd/src/assets/parcel%403x.png',
      'handler': 'cacheFirst',
      'options': {
        'cacheableResponse': {
          'statuses': [0]
        }
      }
    }
  ]
}
