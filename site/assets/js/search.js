const searchElement = document.getElementById('doc-search');
const siteDocsVersion = document
	.querySelector("meta[name='docsearch:version']")
	.getAttribute('content');
docsearch({
	appId: 'R55GP7MXTU',
	apiKey: '3e898afce3bbe63534904c20f404edad',
	indexName: 'neoblaze',
	container: searchElement,
	searchParameters: {
		facetFilters: ['language:en', `version:${siteDocsVersion}`],
	},
	debug: false,
});
