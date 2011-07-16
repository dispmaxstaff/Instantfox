rawPluginData = {}
rawPluginData.plugins = {
    'Google': {
		key: 'g',
		url: 'http://www.google.%ld/#hl=%ls&q=%q&fp=1&cad=b',
		json: 'http://suggestqueries.google.com/complete/search?json&q=%q&hl=%ls'
    },
    'Google Images': {
		key: 'i',
		url: 'http://www.google.%ld/images?q=%q',
		json: 'http://suggestqueries.google.com/complete/search?json&ds=i&q=%q'
    },
    'Google Maps': {
		key: 'm',
		url: 'http://maps.google.com/maps?q=%q&hl=%ls',
		json: 'http://maps.google.%ld/maps/suggest?q=%q&cp=999&hl=%ll&gl=%ll&v=2&json=b'
    },
    'Wikipedia': {
		key: 'w',
		url: 'http://%ls.wikipedia.org/wiki/%q',
		json: 'http://%ls.wikipedia.org/w/api.php?action=opensearch&search=%q'
    },
    /* Youtube is blocked in Turkey ... */
    'Twitter': {
		key: 't',
		url: 'http://twitter.com/#!/search/%q',
    },
    'Weather': {
		key: 'wt',
		url: 'http://weather.instantfox.net/%q',
		json: 'http://maps.google.com/maps/suggest?q=%q&cp=999&hl=%ls&gl=%ls&v=2&json=b',
		hideFromContextMenu: true
    },
    'IMDb': {
		key: 'im',
		url: 'http://www.imdb.com/find?s=all&q=%q',
		json: 'http://sg.media-imdb.com/suggests/%fq/%q.json', // fq = first letter of query
		hideFromContextMenu: true
    },
		'Calculator': {
		key: 'c',
		url: 'resource://instantfox/calculator.html#%q',
		hideFromContextMenu: true
	}
};

rawPluginData.localeMap = {'%ls': 'tr', '%ll': 'tr', '%ld': 'com.tr'}