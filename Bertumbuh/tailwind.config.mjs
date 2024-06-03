/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2A9D8F',
				secondary: '#FAFAFA'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: []
	},
	plugins: [require('daisyui')]
}
