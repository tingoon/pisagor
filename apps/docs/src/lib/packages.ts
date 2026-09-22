import type { Framework } from "./nav";

export type PackageLinks = {
  name: string;
  github: string;
  npm: string;
  storybook: string;
};

const githubRoot = "https://github.com/tingoon/pisagor";

export const packages: Record<Framework, PackageLinks> = {
  astro: {
    github: `${githubRoot}/tree/main/packages/astro`,
    name: "@pisagor/astro",
    npm: "https://www.npmjs.com/package/@pisagor/astro",
    storybook: "http://localhost:4003",
  },
  react: {
    github: `${githubRoot}/tree/main/packages/react`,
    name: "@pisagor/react",
    npm: "https://www.npmjs.com/package/@pisagor/react",
    storybook: "http://localhost:4001",
  },
  vue: {
    github: `${githubRoot}/tree/main/packages/vue`,
    name: "@pisagor/vue",
    npm: "https://www.npmjs.com/package/@pisagor/vue",
    storybook: "http://localhost:4002",
  },
};
