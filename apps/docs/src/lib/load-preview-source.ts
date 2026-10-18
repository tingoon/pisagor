/**
 * Client-side example source loader for ComponentPreview Code tabs. Loads a
 * single example file as `?raw` (not a sources barrel).
 */

import {
  EXAMPLE_SKIP_STEMS,
  exportNameToFileStem,
  findExampleFileLoader,
} from "#/lib/example-file";

export type PreviewSourceKind = "component" | "form" | "block";

export type PreviewSourceRef = {
  framework: string;
  id: string;
  exportName: string;
  kind: PreviewSourceKind;
};

type RawLoaderMap = Record<string, () => Promise<string>>;

const componentRaws: Record<string, RawLoaderMap> = {
  astro: import.meta.glob<string>(
    "../../../../packages/astro/examples/*/*/*.{astro,ts,tsx}",
    { import: "default", query: "?raw" },
  ),
  react: import.meta.glob<string>(
    "../../../../packages/react/examples/*/*/*.{ts,tsx}",
    { import: "default", query: "?raw" },
  ),
  solid: import.meta.glob<string>(
    "../../../../packages/solid/examples/*/*/*.{ts,tsx}",
    { import: "default", query: "?raw" },
  ),
  svelte: import.meta.glob<string>(
    "../../../../packages/svelte/examples/*/*/*.svelte",
    { import: "default", query: "?raw" },
  ),
  vue: import.meta.glob<string>(
    "../../../../packages/vue/examples/*/*/*.{ts,tsx,vue}",
    { import: "default", query: "?raw" },
  ),
};

const formRaws: Record<string, RawLoaderMap> = {
  react: import.meta.glob<string>(
    "../../../../packages/react-form/examples/*/*/*.{ts,tsx}",
    { import: "default", query: "?raw" },
  ),
  solid: import.meta.glob<string>(
    "../../../../packages/solid-form/examples/*/*/*.{ts,tsx}",
    { import: "default", query: "?raw" },
  ),
  svelte: import.meta.glob<string>(
    "../../../../packages/svelte-form/examples/*/*/*.svelte",
    { import: "default", query: "?raw" },
  ),
  vue: import.meta.glob<string>(
    "../../../../packages/vue-form/examples/*/*/*.{ts,tsx,vue}",
    { import: "default", query: "?raw" },
  ),
};

const blockRaws: Record<string, RawLoaderMap> = {
  react: import.meta.glob<string>("../blocks/react/*/*.{ts,tsx}", {
    import: "default",
    query: "?raw",
  }),
  solid: import.meta.glob<string>("../blocks/solid/*/*.{ts,tsx}", {
    import: "default",
    query: "?raw",
  }),
  svelte: import.meta.glob<string>("../blocks/svelte/*/*.svelte", {
    import: "default",
    query: "?raw",
  }),
  vue: import.meta.glob<string>("../blocks/vue/*/*.{ts,tsx,vue}", {
    import: "default",
    query: "?raw",
  }),
};

const moduleCache = new Map<string, Promise<string>>();

export { exportNameToFileStem };

function loaderFor(ref: PreviewSourceRef): (() => Promise<string>) | undefined {
  const stem = exportNameToFileStem(ref.exportName);
  if (EXAMPLE_SKIP_STEMS.has(stem)) return undefined;

  let modules: RawLoaderMap | undefined;
  if (ref.kind === "block") modules = blockRaws[ref.framework];
  else if (ref.kind === "form") modules = formRaws[ref.framework];
  else modules = componentRaws[ref.framework];

  if (!modules) return undefined;
  return findExampleFileLoader(modules, ref.id, stem) as
    (() => Promise<string>) | undefined;
}

/** Resolve one example source string (cached per example file). */
export async function loadPreviewSource(
  ref: PreviewSourceRef,
): Promise<string> {
  const cacheKey = `${ref.kind}:${ref.framework}:${ref.id}:${ref.exportName}`;
  let pending = moduleCache.get(cacheKey);
  if (!pending) {
    const loader = loaderFor(ref);
    if (!loader) {
      throw new Error(
        `No raw example for ${ref.kind}/${ref.framework}/${ref.id}/${ref.exportName}`,
      );
    }
    pending = loader();
    moduleCache.set(cacheKey, pending);
  }
  return pending;
}

/** Resolve highlighter lang after source is known (Vue SFC vs script-only). */
export function resolvePreviewLang(
  requestedLang: string,
  code: string,
): string {
  if (requestedLang !== "vue" && requestedLang !== "vue-html") {
    return requestedLang;
  }
  const hasVueSfcBlock = /<(?:script|template|style)\b/i.test(code);
  const hasMarkup = /<[A-Za-z]/.test(code);
  if (requestedLang === "vue-html" || (!hasVueSfcBlock && hasMarkup)) {
    return "vue";
  }
  if (hasVueSfcBlock) return "vue";
  return "ts";
}
