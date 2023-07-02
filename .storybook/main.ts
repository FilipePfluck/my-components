import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    //@ts-ignore
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ]

    //@ts-ignore
    config.resolve.alias = {
      //@ts-ignore
      ...config.resolve.alias,
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/styled-system": path.resolve(__dirname, "../styled-system"),
    };

    return config;
  }
};
export default config;
