import type { Framework } from "./nav";

export type PackageLinks = {
  name: string;
  github: string;
  npm: string;
  storybook: string;
};

const githubRoot = "https://github.com/tingoon/pisagor";

function pkg(dir: string, name: string, storybook = ""): PackageLinks {
  return {
    github: `${githubRoot}/tree/main/packages/${dir}`,
    name,
    npm: `https://www.npmjs.com/package/${name}`,
    storybook,
  };
}

export const packages: Record<Framework, PackageLinks> = {
  astro: pkg("astro", "@pisagor/astro", "http://localhost:4003"),
  react: pkg("react", "@pisagor/react", "http://localhost:4001"),
  solid: pkg("solid", "@pisagor/solid"),
  svelte: pkg("svelte", "@pisagor/svelte"),
  vue: pkg("vue", "@pisagor/vue", "http://localhost:4002"),
};

/** Extra publishable packages (forms/charts) keyed by npm name for PackageLinks overrides. */
export const packageLinksByName: Record<string, PackageLinks> = {
  "@pisagor/astro": packages.astro,
  "@pisagor/react": packages.react,
  "@pisagor/react-charts": pkg(
    "react-charts",
    "@pisagor/react-charts",
    "http://localhost:4001",
  ),
  "@pisagor/react-form": pkg(
    "react-form",
    "@pisagor/react-form",
    "http://localhost:4001",
  ),
  "@pisagor/recipes": pkg("recipes", "@pisagor/recipes"),
  "@pisagor/solid": packages.solid,
  "@pisagor/solid-form": pkg("solid-form", "@pisagor/solid-form"),
  "@pisagor/svelte": packages.svelte,
  "@pisagor/svelte-form": pkg("svelte-form", "@pisagor/svelte-form"),
  "@pisagor/vue": packages.vue,
  "@pisagor/vue-charts": pkg(
    "vue-charts",
    "@pisagor/vue-charts",
    "http://localhost:4002",
  ),
  "@pisagor/vue-form": pkg(
    "vue-form",
    "@pisagor/vue-form",
    "http://localhost:4002",
  ),
};

export function resolvePackageLinks(
  framework: Framework,
  packageName?: string,
): PackageLinks {
  if (packageName && packageLinksByName[packageName]) {
    return packageLinksByName[packageName];
  }
  if (packageName) {
    const dir = packageName.replace("@pisagor/", "");
    return pkg(dir, packageName, packages[framework].storybook);
  }
  return packages[framework];
}
