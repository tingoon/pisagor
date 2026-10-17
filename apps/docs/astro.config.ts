import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const docsSrc = fileURLToPath(new URL("./src", import.meta.url));
const packagesRoot = fileURLToPath(new URL("../../packages", import.meta.url));

const base = process.env.DOCS_BASE_PATH || "/";

type OxcJsx = {
  refresh?: boolean;
  [key: string]: unknown;
};

type OxcConfig = {
  jsx?: boolean | OxcJsx;
  [key: string]: unknown;
};

type RolldownTransform = {
  jsx?: unknown;
  [key: string]: unknown;
};

type OptimizeDepsConfig = {
  rolldownOptions?: {
    define?: Record<string, string>;
    transform?: RolldownTransform;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

/**
 * @vitejs/plugin-react sets `oxc.jsx.refresh: true` globally. @vitejs/plugin-vue
 * spreads `config.oxc` into a direct `transformWithOxc` call for `<script lang="ts">`,
 * so Vue SFCs with `use*` composables get `$RefreshSig$` injected (vite-plugin-vue#798).
 * vite:oxc already closed over the pre-resolved options (refresh still on for React);
 * replace only the public `config.oxc` so Vue's later reads see `refresh: false`.
 * Remove once plugin-vue ships the upstream override.
 */
function preventOxcRefreshLeakToVue() {
  return {
    configResolved(config: { oxc?: OxcConfig }) {
      const oxc = config.oxc;
      if (!oxc || typeof oxc.jsx !== "object" || oxc.jsx == null) return;
      const nextOxc: OxcConfig = {
        ...oxc,
        jsx: { ...oxc.jsx, refresh: false },
      };
      try {
        config.oxc = nextOxc;
      } catch {
        // ResolvedConfig may be frozen — last resort disables refresh for everyone.
        try {
          oxc.jsx.refresh = false;
        } catch {
          /* ignore */
        }
      }
    },
    enforce: "post" as const,
    name: "pisagor:prevent-oxc-refresh-leak-to-vue",
  };
}

/**
 * Vite-plugin-solid sets `optimizeDeps.rolldownOptions.transform.jsx =
 * "preserve"` on Vite 8 so the scanner does not inject `react/jsx-dev-runtime`.
 * That leaves JSX intact when Vite's `import.meta.glob` dep-scan path rewrites
 * the module as `moduleType: "js"`, which then fails with "JSX syntax is
 * disabled". Serve/build still use babel-preset-solid; only the Rolldown dep
 * scanner needs a transform that emits plain JS. Docs already depends on React,
 * so automatic runtime for the scanner is safe.
 */
function fixSolidPreserveJsxForDepScan() {
  return {
    configResolved(config: { optimizeDeps?: OptimizeDepsConfig }) {
      const transform = config.optimizeDeps?.rolldownOptions?.transform;
      if (transform?.jsx !== "preserve") return;
      transform.jsx = { runtime: "automatic" };
    },
    enforce: "post" as const,
    name: "pisagor:fix-solid-preserve-jsx-dep-scan",
  };
}

/**
 * Vite/Rolldown dep prebundling can evaluate React's `jsx-dev-runtime` entry
 * with `NODE_ENV=production`, which stubs `jsxDEV` to `undefined` and leaves
 * every React island blank (ExamplesHost included). Force development for the
 * optimizer while `astro dev` is running.
 */
function fixReactJsxDevRuntimeForDepOptimize() {
  return {
    config(config: {
      optimizeDeps?: OptimizeDepsConfig & {
        esbuildOptions?: { define?: Record<string, string> };
      };
    }) {
      if (process.env.NODE_ENV === "production") return;
      if (!config.optimizeDeps) config.optimizeDeps = {};
      const optimizeDeps = config.optimizeDeps;
      if (!optimizeDeps.rolldownOptions) optimizeDeps.rolldownOptions = {};
      const rolldown = optimizeDeps.rolldownOptions;
      rolldown.define = {
        ...(rolldown.define as Record<string, string> | undefined),
        "process.env.NODE_ENV": JSON.stringify("development"),
      };
      if (!optimizeDeps.esbuildOptions) optimizeDeps.esbuildOptions = {};
      const esbuild = optimizeDeps.esbuildOptions;
      esbuild.define = {
        ...esbuild.define,
        "process.env.NODE_ENV": JSON.stringify("development"),
      };
    },
    enforce: "pre" as const,
    name: "pisagor:fix-react-jsx-dev-runtime-dep-optimize",
  };
}

/**
 * Live examples import `faker` only for `faker.lorem`, but the package pulls
 * its whole English locale (~400 KB) into the React App Shell preview chunk.
 * Resolve it to a lorem-only stand-in for imports from example sources; the
 * Code tab still shows the real `@faker-js/faker` import.
 */
function fakerLiteForExamples() {
  const shim = fileURLToPath(
    new URL("./src/lib/faker-lite.ts", import.meta.url),
  );
  return {
    enforce: "pre" as const,
    name: "pisagor:faker-lite",
    resolveId(id: string, importer?: string) {
      if (id !== "@faker-js/faker" || !importer) return null;
      return /[\\/]examples[\\/]/.test(importer) ? shim : null;
    },
  };
}

/**
 * Solid examples import icons from the `@pisagor/solid/icons` barrel (`export
 * *` of `@squidlab/phosphor-solid/icons`). Solid's compiled templates are
 * top-level calls, so every icon any example touches lands in one shared ~280
 * KB chunk that every Solid page downloads. Rewrite named icon imports to the
 * per-icon source files so Rolldown can split them per example. Types and
 * non-icon exports keep using the barrel.
 */
function solidPerIconImports() {
  const requireFromSolid = createRequire(
    fileURLToPath(
      new URL("../../packages/solid/package.json", import.meta.url),
    ),
  );
  // `.` → src/lib/mod.tsx; icons live in src/icons/<Name>.tsx.
  const pkgRoot = resolvePath(
    dirname(requireFromSolid.resolve("@squidlab/phosphor-solid")),
    "../..",
  );
  const iconFiles = new Map<string, string>();
  const barrel = readFileSync(join(pkgRoot, "src/icons/mod.tsx"), "utf8");
  for (const match of barrel.matchAll(
    /export \{ (\w+) \} from "\.\/(\w+)";/g,
  )) {
    const [, name, file] = match;
    if (name && file)
      iconFiles.set(name, join(pkgRoot, `src/icons/${file}.tsx`));
  }
  const importRe =
    /import\s*\{([^}]*)\}\s*from\s*["']@pisagor\/solid\/icons["'];?/g;
  const owned =
    /[\\/](packages[\\/]solid(-[\w-]+)?|apps[\\/]docs[\\/]src[\\/]examples[\\/]solid)[\\/]/;

  return {
    enforce: "pre" as const,
    name: "pisagor:solid-per-icon-imports",
    transform(code: string, id: string) {
      if (!code.includes("@pisagor/solid/icons") || !owned.test(id))
        return null;
      if (id.includes("?")) return null;
      let changed = false;
      const next = code.replace(importRe, (statement, specifiers: string) => {
        const rest: string[] = [];
        const direct: string[] = [];
        for (const raw of specifiers.split(",")) {
          const spec = raw.trim();
          if (!spec) continue;
          const name = spec.replace(/^type\s+/, "").split(/\s+as\s+/)[0] ?? "";
          const file = spec.startsWith("type ")
            ? undefined
            : iconFiles.get(name);
          if (file)
            direct.push(`import { ${spec} } from ${JSON.stringify(file)};`);
          else rest.push(spec);
        }
        if (direct.length === 0) return statement;
        changed = true;
        return [
          ...direct,
          ...(rest.length
            ? [`import { ${rest.join(", ")} } from "@pisagor/solid/icons";`]
            : []),
        ].join("\n");
      });
      return changed ? { code: next, map: null } : null;
    },
  };
}

/**
 * Which sources each framework integration owns — the single table both the
 * React and Solid JSX plugins derive their include/exclude globs from. `dirs`
 * are repo-relative folders, `files` individual docs files, `deps` npm packages
 * that ship raw framework JSX.
 */
const frameworkSources = {
  astro: { dirs: ["packages/astro"] },
  react: {
    dirs: [
      "packages/react",
      "packages/react-*",
      "apps/react",
      "apps/docs/src/examples/react",
    ],
  },
  solid: {
    // Packages that ship Solid JSX source (must compile with Solid, not React).
    deps: [
      "@squidlab/phosphor-solid",
      "@ark-ui/solid",
      "@tanstack/solid-form",
      "@tanstack/solid-table",
      "@tanstack/solid-virtual",
    ],
    dirs: [
      "packages/solid",
      "packages/solid-*",
      "apps/solid",
      "apps/docs/src/examples/solid",
    ],
    files: ["apps/docs/src/components/docs/solid-examples-host.tsx"],
  },
  svelte: {
    dirs: [
      "packages/svelte",
      "packages/svelte-*",
      "apps/svelte",
      "apps/docs/src/examples/svelte",
    ],
  },
  vue: {
    dirs: [
      "packages/vue",
      "packages/vue-*",
      "apps/vue",
      "apps/docs/src/examples/vue",
    ],
  },
} satisfies Record<
  string,
  { dirs: string[]; files?: string[]; deps?: string[] }
>;

type FrameworkId = keyof typeof frameworkSources;

const JS_EXT = "{js,jsx,ts,tsx}";

/** Every glob owned by one framework; `ext` limits matches to JS/TS sources. */
function ownedGlobs(id: FrameworkId, ext?: string): string[] {
  const entry: { dirs: string[]; files?: string[]; deps?: string[] } =
    frameworkSources[id];
  const tail = ext ? `/**/*.${ext}` : "/**";
  return [
    ...entry.dirs.map((dir) => `**/${dir}${tail}`),
    ...(entry.files ?? []).map((file) => `**/${file}`),
    ...(entry.deps ?? []).flatMap((dep) => [
      `**/node_modules/${dep}${tail}`,
      `**/node_modules/.bun/${dep.replace("/", "+")}*${tail}`,
    ]),
  ];
}

const nonReactFrameworks: FrameworkId[] = ["astro", "solid", "svelte", "vue"];

const reactInclude = [
  ...ownedGlobs("react", JS_EXT),
  // Docs chrome / hosts default to React unless another framework owns them.
  `**/apps/docs/src/**/*.${JS_EXT}`,
];

const reactExclude = [
  ...nonReactFrameworks.flatMap((id) => ownedGlobs(id)),
  "**/*.{vue,svelte,astro,css,scss,sass,less,styl,stylus,html,svg,md,mdx}",
];

const solidInclude = ownedGlobs("solid", JS_EXT);

/** Keep redirects and standalone preview frames out of the sitemap. */
function isSitemapPage(page: string): boolean {
  const path = new URL(page).pathname.slice(base.replace(/\/$/, "").length);
  if (path === "/" || path === "/404/" || path.startsWith("/preview/"))
    return false;
  // `/x/components/`, `/x/blocks/`, `/x/components/<id>/`, `/x/forms/<id>/`
  // only redirect to the real page.
  if (/^\/[^/]+\/(components|blocks)\/$/.test(path)) return false;
  if (/^\/[^/]+\/(components|forms)\/[^/]+\/$/.test(path)) return false;
  return true;
}

export default defineConfig({
  base,
  integrations: [
    mdx(),
    react({
      // Keep React Fast Refresh / oxc jsx refresh off non-React sources.
      exclude: reactExclude,
      // Extension-limited: @vitejs/plugin-react maps `include` to Vite 8
      // `oxc.jsxRefreshInclude`. A bare `**` glob also matches CSS, so after
      // `@tailwindcss/vite` emits `@layer properties;` vite:oxc tries to parse
      // it as JS and docs `astro dev` 500s (build is fine — different pipeline).
      include: reactInclude,
    }),
    // Deps that ship Solid JSX (`"solid"` condition or raw TSX) are listed in
    // `frameworkSources.solid.deps`. Without them, Vite/oxc emits React
    // `jsxDEV` and previews show "[object Object]".
    solid({ include: solidInclude }),
    svelte(),
    vue(),
    sitemap({ filter: isSitemapPage }),
  ],
  server: { host: true, port: 4000 },
  // Origin only; the `/pisagor/` path comes from `base` (DOCS_BASE_PATH in CI).
  site: process.env.DOCS_SITE || "https://tingoon.github.io",
  vite: {
    optimizeDeps: {
      // Prebundle would transform these Solid JSX sources with React JSX.
      exclude: [...frameworkSources.solid.deps],
    },
    plugins: [
      fixReactJsxDevRuntimeForDepOptimize(),
      fakerLiteForExamples(),
      solidPerIconImports(),
      tailwindcss(),
      preventOxcRefreshLeakToVue(),
      fixSolidPreserveJsxForDepScan(),
    ],
    resolve: {
      alias: [
        {
          find: "#examples/astro",
          replacement: join(packagesRoot, "astro/examples"),
        },
        {
          find: "#examples/react-form",
          replacement: join(packagesRoot, "react-form/examples"),
        },
        {
          find: "#examples/react",
          replacement: join(packagesRoot, "react/examples"),
        },
        {
          find: "#examples/solid-form",
          replacement: join(packagesRoot, "solid-form/examples"),
        },
        {
          find: "#examples/solid",
          replacement: join(packagesRoot, "solid/examples"),
        },
        {
          find: "#examples/svelte-form",
          replacement: join(packagesRoot, "svelte-form/examples"),
        },
        {
          find: "#examples/svelte",
          replacement: join(packagesRoot, "svelte/examples"),
        },
        {
          find: "#examples/vue-form",
          replacement: join(packagesRoot, "vue-form/examples"),
        },
        {
          find: "#examples/vue",
          replacement: join(packagesRoot, "vue/examples"),
        },
        {
          find: /^#\/changelog\/([^/]+)$/,
          replacement: `${packagesRoot}/$1/CHANGELOG.md`,
        },
        { find: /^#\//, replacement: `${docsSrc}/` },
      ],
    },
    ssr: {
      noExternal: [
        "@pisagor/react",
        "@pisagor/react-form",
        "@pisagor/vue",
        "@pisagor/vue-form",
        "@pisagor/solid",
        "@pisagor/solid-form",
        "@pisagor/svelte",
        "@pisagor/svelte-form",
        "@pisagor/utils",
        "@pisagor/recipes",
        "@pisagor/tokens",
        "@squidlab/phosphor-solid",
        "@ark-ui/solid",
      ],
    },
  },
});
