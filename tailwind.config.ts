

export default {
	darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
	  fontFamily: {
		montserrat: [
			'Montserrat',
			'sans-serif'
		],
		coluna: [
			'Coluna',
			'sans-serif'
		],
		general_sans: [
			'General Sans',
			'sans-serif'
		]
    },
  },
  plugins: [require("tailwindcss-animate")],

} 

}