/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				Imglight: "url('/src/assets/img/bg-light.png')",
				Imgdark: "url('/src/assets/img/bg-dark.png')"
			}
		}
	},
	plugins: []
}
