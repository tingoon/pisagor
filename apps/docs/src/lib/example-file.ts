/** Map example export names ↔ on-disk files (docs live preview + Code ?raw). */

export const EXAMPLE_SKIP_STEMS = new Set([
  "data",
  "helpers",
  "index",
  "sources",
]);

/** `Default` → `default`, `WithCard` → `with-card`. */
export function exportNameToFileStem(exportName: string): string {
  return exportName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

type LoaderMap = Record<string, () => Promise<unknown>>;

/** Find a lazy loader for `/<id>/<stem>.<ext>` under an `import.meta.glob` map. */
export function findExampleFileLoader(
  modules: LoaderMap,
  id: string,
  stem: string,
): (() => Promise<unknown>) | undefined {
  if (EXAMPLE_SKIP_STEMS.has(stem)) return undefined;
  const needle = `/${id}/${stem}.`;
  const key = Object.keys(modules).find((path) => {
    if (!path.includes(needle)) return false;
    const base = path.split("/").pop() ?? "";
    const fileStem = base.replace(/\.[^.]+$/, "");

    return fileStem === stem && !EXAMPLE_SKIP_STEMS.has(fileStem);
  });

  return key ? modules[key] : undefined;
}

/**
 * Resolve the live component from a loaded example module. React/Solid: named
 * export. Vue/Svelte/Astro: `default`.
 */
export function resolveExampleExport(
  mod: Record<string, unknown> | null | undefined,
  exportName: string,
): unknown {
  if (!mod) return null;
  const named = mod[exportName];
  if (named != null && typeof named !== "string") return named;
  const def = mod.default;
  if (def != null && typeof def !== "string") return def;

  return null;
}
