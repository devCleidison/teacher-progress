/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{ts,tsx}',
		'./**/*.html',
	],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			brand: ['Lobster', 'cursive'],
		}
	},
	plugins: [],
};

