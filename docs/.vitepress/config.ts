import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AACAppSiteDocs",
  description:
    "Documentation static site, explaining the AAC app site and its components.",
  themeConfig: {
    logo: "/aphasia_phrases_logo.svg",
    siteTitle: "Watch Your Language!",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Site Guide", link: "/api-examples" },
      { text: "Components", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "linkedin", link: "https://github.com/vuejs/vitepress" },
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      copyright: "Copyright © 2023-present King's College London",
    },
  },
});
