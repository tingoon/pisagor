/**
 * Client-side example source loader for ComponentPreview Code tabs.
 * Loads only the matching `sources.ts` barrel on demand (Vite code-split).
 */

export type PreviewSourceKind = "component" | "form" | "block";

export type PreviewSourceRef = {
  framework: string;
  id: string;
  exportName: string;
  kind: PreviewSourceKind;
};

type SourcesModule = {
  sources: Record<string, string>;
};

type LoaderMap = Record<string, () => Promise<SourcesModule>>;

const componentSources: Record<string, LoaderMap> = {
  astro: import.meta.glob<SourcesModule>(
    "../../../../packages/astro/examples/*/sources.ts",
  ),
  react: import.meta.glob<SourcesModule>(
    "../../../../packages/react/examples/*/sources.ts",
  ),
  solid: import.meta.glob<SourcesModule>(
    "../../../../packages/solid/examples/*/sources.ts",
  ),
  svelte: import.meta.glob<SourcesModule>(
    "../../../../packages/svelte/examples/*/sources.ts",
  ),
  vue: import.meta.glob<SourcesModule>(
    "../../../../packages/vue/examples/*/sources.ts",
  ),
};

const formSources: Record<string, LoaderMap> = {
  react: import.meta.glob<SourcesModule>(
    "../../../../packages/react-form/examples/*/sources.ts",
  ),
  solid: import.meta.glob<SourcesModule>(
    "../../../../packages/solid-form/examples/*/sources.ts",
  ),
  svelte: import.meta.glob<SourcesModule>(
    "../../../../packages/svelte-form/examples/*/sources.ts",
  ),
  vue: import.meta.glob<SourcesModule>(
    "../../../../packages/vue-form/examples/*/sources.ts",
  ),
};

const blockSources: Record<string, LoaderMap> = {
  react: import.meta.glob<SourcesModule>("../examples/react/*/sources.ts"),
  solid: import.meta.glob<SourcesModule>("../examples/solid/*/sources.ts"),
  svelte: import.meta.glob<SourcesModule>("../examples/svelte/*/sources.ts"),
  vue: import.meta.glob<SourcesModule>("../examples/vue/*/sources.ts"),
};

const moduleCache = new Map<string, Promise<SourcesModule>>();

function findGlobKey(
  modules: Record<string, unknown>,
  suffix: string,
): string | undefined {
  return Object.keys(modules).find((path) => path.endsWith(suffix));
}

function loaderFor(
  ref: PreviewSourceRef,
): (() => Promise<SourcesModule>) | undefined {
  const { framework, id, kind } = ref;
  let modules: LoaderMap | undefined;
  let suffix: string;

  if (kind === "block") {
    modules = blockSources[framework];
    suffix = `/examples/${framework}/${id}/sources.ts`;
  } else if (kind === "form") {
    modules = formSources[framework];
    suffix = `/examples/${id}/sources.ts`;
  } else {
    modules = componentSources[framework];
    suffix = `/examples/${id}/sources.ts`;
  }

  if (!modules) return undefined;
  const key = findGlobKey(modules, suffix);
  return key ? modules[key] : undefined;
}

/** Resolve one example source string (cached per sources barrel). */
export async function loadPreviewSource(
  ref: PreviewSourceRef,
): Promise<string> {
  const cacheKey = `${ref.kind}:${ref.framework}:${ref.id}`;
  let pending = moduleCache.get(cacheKey);
  if (!pending) {
    const loader = loaderFor(ref);
    if (!loader) {
      throw new Error(
        `No sources loader for ${ref.kind}/${ref.framework}/${ref.id}`,
      );
    }
    pending = loader();
    moduleCache.set(cacheKey, pending);
  }

  const mod = await pending;
  const code = mod.sources[ref.exportName];
  if (typeof code !== "string") {
    throw new Error(
      `Missing source "${ref.exportName}" in ${ref.kind}/${ref.framework}/${ref.id}`,
    );
  }
  return code;
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
