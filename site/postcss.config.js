const purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
	plugins: [
		require('autoprefixer'),
		purgecss({
			content: ['./hugo_stats.json'],
			defaultExtractor: (content) => {
				const els = JSON.parse(content).htmlElements;
				return [
					...(els.tags || []),
					...(els.classes || []),
					...(els.ids || []),
				];
			},
			safelist: {
				deep: [/data-.*/],
			},
		}),
	],
};
