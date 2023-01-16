import daisyui from "daisyui";
import typo from "@tailwindcss/typography";

export default {
    content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
    plugins: [typo, daisyui]
};
