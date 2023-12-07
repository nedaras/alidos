/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '480px',
			'md': '600px',
			'lg': '900px',
			'xl': '1200px',
			'2xl': '1500px'
		},
		extend: {},
	},
	experimental: {
		optimizeUniversalDefaults: true
	},
	plugins: [],
}
