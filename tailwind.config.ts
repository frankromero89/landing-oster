import type { Config } from "tailwindcss";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        liverpool: '#ce2c95',
      },
    },
  },
  plugins: [],
} as Config;
