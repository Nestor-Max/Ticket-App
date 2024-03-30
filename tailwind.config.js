/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				nav: '#FFFFFF', // Navigation bar color
				page: '#F5F5F5', // Page background color
				card: '#FFFFFF', // Card background color
				'text-default': '#333333', // Default text color
				button: '#4CAF50', // Button color
				'button-hover': '#388E3C', // Button hover color
			},
			boxShadow: {
				card: '0 2px 4px rgba(0, 0, 0, 0.1)', // Card shadow
			},
			// Define styles for card hover
			hover: {
				card: 'transform: scale(1.05);', // Increase scale on hover
			},
		},
	},
	plugins: [],
};
