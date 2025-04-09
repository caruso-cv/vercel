module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{jsx,js,ico,css,webm,mp4}'
	],
	swDest: 'src/sw.js',
	runtimeCaching: [
		{
		  "urlPattern": "/videos/.*",
		  "handler": "CacheFirst",
		  "options": {
			"cacheName": "my-video-cache"
		  }
		}
	  ],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};