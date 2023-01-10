/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/layout/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				notosans: ["Noto Sans KR", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"iris-blue": "#14AAD5",
				"pacific-blue": "#0094D9",
				"navy-blue": "#005BD7",
				"hipple-blue": "#4E7D96",
				"summer-sky": "#48B7E1",
				"french-sky": "#9FC9DD",
				"corn-yellow": "#FFC953",
				"tangerine-yellow": "#F9CE0B",
				"bittersweet-pink": "#FF7473",
				"dark-pink": "#EE4E6B",
				"aquamarine-green": "#6ECB98",
				"chateau-green": "#3F9469",
				"crusoe-green": "#154E3F",
				"white-smoke": "#F5F5F5",
				"white-soapstone": "#EDE5DC",
				ivory: "#FFEDC8",
			},
		},
	},
	plugins: [],
};
