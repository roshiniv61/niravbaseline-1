const theme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');
// cont daisyui = require('daisyUI');

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
	important: true, // See https://tailwindcss.com/docs/configuration#important
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [
			'./hugo_stats.json',
			'./layouts/**/*.html',
		],
		extractors: [
			{
				extractor: (content) => {
					let els = JSON.parse(content).htmlElements;
					return els.tags.concat(els.classes, els.ids);
				},
				extensions: ['json']
			},
		],
		mode: 'all',

	},
	theme: {
		extend: {
			fontFamily: {
				'Montserrat': ['"Montserrat"'],
				'OpenSans': ['"Open+Sans"'],
			}, colors: {
				'theme-primary' : '#05335a',
				'theme-secondary' : '#ea5a25',
				'custom-yellow-light': '#edf2f5',
				'custom-light-white': '#edf2f5',
				'custom-light-grey': '#f9f8f7',
				'custom-gray': '#f2f2f2',
				'custom-nav': '#fafafa',
				'custom-lightBrown': '#80542f',
				'custom-darkBrown': '#4c2f26',
				'custom-white': '#ecece7',
				'custom-orange': '#f1eee3',
				'custom-ivory': '#e1d7c3',
			},
			backgroundImage:
			{
				'home-hero': "url('/images/hero-temp.jpeg')",
				'home-hero-benz': "url('/images/20200421_benztooling-metal-header.png')",
			},
			transitionProperty: ['hover', 'focus'],
		}
	},
	plugins: [
		typography,
		// require('daisyui'),
	],
};
