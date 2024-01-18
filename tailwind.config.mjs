/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				onest: ['Onest Variable', 'system-ui','sans-serif']
			},
			colors: {
				'primary': '#310A90',
			}
		},
	},
	plugins: [],
}
