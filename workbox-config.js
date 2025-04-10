module.exports = {
	globDirectory: 'public/',
	globPatterns: ['**/*.{js,css,webm,mp4,ico}'],
	swDest: 'public/sw.js',
	runtimeCaching: [
	  {
		urlPattern: /\/videos\/.*\.(mp4|webm)$/,
		handler: 'CacheFirst',
		options: {
		  cacheName: 'my-video-cache',
		},
	  },
	],
	ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  };