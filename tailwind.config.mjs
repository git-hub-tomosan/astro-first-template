/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import tailwindcssEasing from "tailwindcss-easing";

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFeatureSettings: {
        palt: '"palt"',
      },
      spacing: {
        18: "4.5rem", // 72px
      },
      zIndex: {
        1: "1",
      },
      colors: {},
      lineHeight: {
        relaxed: "1.75",
      },
      maxWidth: {
        container: "62.5rem", // 1000px
      },
      borderRadius: {
        full: "100vmax",
      },
    },
  },
  plugins: [
    tailwindcssEasing,
    plugin(({ matchComponents, matchUtilities, theme }) => {
      /**
       * Max width container
       */
      matchComponents(
        {
          "layout-container": (value) => ({
            "max-width": value,
            "@apply w-full mx-auto": "",
          }),
        },
        {
          values: {
            ...theme("maxWidth"), // 既存のmax-widthクラスを利用
            DEFAULT: theme("maxWidth.container"), // デフォルト値を設定
          },
        }
      );

      /**
       * Font feature settings
       */
      matchUtilities(
        {
          font: (value) => ({ "font-feature-settings": value }),
        },
        {
          values: theme("fontFeatureSettings"),
        }
      );
    }),
  ],
};
