steal.config({
	map: {
		"*": {
			"jquery/jquery.js" : "jquery",
			"jquery/": "jquerypp/"
		}
	},
	paths: {
		"jquery/": "jquerypp/",
		"jquery": "lib/jquery/jquery.js",
		"syn": ""
	},
	shim : {
		jquery: {
			exports: "jQuery"
		}
	},
	ext: {
		js: "js",
		css: "css",
		less: "steal/less/less.js",
		ejs: "can/view/ejs/ejs.js",
		mustache: "can/view/mustache/mustache.js"
	}
})
