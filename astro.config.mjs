// @ts-check
import { defineConfig } from "astro/config";

import starlight from "@astrojs/starlight";
import { spawnSync } from "node:child_process"

try {
  spawnSync("xdg-open", [ "https://fluxer.gg/jbcrn" ]);
  spawnSync("xdg-open", [ "https://party.jbc.lol/hi.gif" ]);
  spawnSync("xdg-open", [ "http://localhost:4321" ]);
} catch {}

// https://astro.build/config
export default defineConfig({
  site: "https://fluxcord.jbcrn.dev",
  redirects: {
    "/discord/invite/": "/getting-started/",
    "/donate/": "https://donate.fluxcord.jbcrn.dev",
  },
  // trailingSlash: "always",
  integrations: [
    starlight({
      title: "Fluxcord Documentation",
      routeMiddleware: "./src/routeData.ts",
      sidebar: [
        {
          label: "Getting started",
          link: "/getting-started",
        },
        {
          label: "Self-hosting",
          link: "/self-hosting"
        },
        {
          label: "Self-hosting voice",
          link: "/self-hosting-voice"
        },
        {
          label: "Terms of Service",
          link: "/terms"
        },
        {
          label: "Privacy Policy",
          link: "/privacy"
        },
      ],
      logo: {
        light: "./src/assets/docs-light.svg",
        dark: "./src/assets/docs-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "fluxer",
          label: "Fluxer",
          href: "https://fluxer.gg/jbcrn",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.jbcrn.dev",
        },
        {
          icon: "fluxfur",
          label: "FluxFur",
          href: "https://fluxfur.com/invite/fluxcord",
        },
        {
          icon: "seti:git",
          label: "Repository",
          href: "https://git.gay/Fluxcord/core",
        },
      ],
      editLink: {
        baseUrl: "https://git.gay/Fluxcord/site/_edit/master",
      },
      customCss: ["./src/styles/global.css", "./src/styles/docs.css", "./src/styles/landing.css"],
    }),
  ],
});
