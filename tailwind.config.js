/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }, colors: {
      "AzulEscuro1": "#02031a",
      "AzulEscuro2": "#021b2b",
      "Salmao1": "#b10c43",
      "Salmao2": "#ff0841",
      "Areia": "#ebdfcc",
      "White": "#fff",
      "Black": "black"
    }
  },
  plugins: [],
}
