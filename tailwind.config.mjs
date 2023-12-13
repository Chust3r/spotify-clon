/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindClamp = require('@tailwindcss/line-clamp')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			background: '#121212',
			foreground: '#b3b3b3',
			primary: '#1DB954',
			...colors,
		},
		extend: {
			fontFamily: {
				Circular: ['Circular', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [ tailwindClamp],
}
