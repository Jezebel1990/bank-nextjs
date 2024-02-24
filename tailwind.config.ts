import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    'img_bg_hero': "url('../assets/bg-hero.jpg)",

    extend: {
     'primary-blue': '#106EB0',
      'primary-gray': '#33303E',
      'second-gray': '#4E4B59',
      'gray-phone': '#F4F4F4',
      'txt-gray': '#747786',
       'opacity-gray': 'rgba(100, 80, 57, 0.1)'

    },
  },
  plugins: [],
};
export default config;
