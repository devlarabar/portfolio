/** @type {import('tailwindcss').Config} */

const darkTheme = {
	"primary": "#3abff8",
	"secondary": "#828df8",
	"accent": "#FF51D6",
	"neutral": "#1E2029",
	"base-100": "#0B0C0F",
	"info": "#21BCFF",
	"success": "#39EBD3",
	"warning": "#FFE26C",
	"error": "#FF4498",
	"base-200": "#4F00AB"
}

const lightTheme = {
	"primary": "#067AAC",
	"secondary": "#4F5FF3",
	"accent": "#FF51D6",
	"neutral": "#FAF7F3",
	"base-100": "#FFFFFE",
	"info": "#21BCFF",
	"success": "#39EBD3",
	"warning": "#FFE26C",
	"error": "#FF4498",
	"base-200": "#E8DBC5"
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'xs': '320px',
			'lg-plus': '1120px',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'display': ['Oswald'],
			'body': ['"Open Sans"'],
		},
		colors: {
			'gradient-start': '#3abff8',
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: { ...darkTheme }
			},
			{
				light: { ...lightTheme }
			}
		],
	},
}
