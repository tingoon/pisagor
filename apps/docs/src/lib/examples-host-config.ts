/** DOM bridge so framework pages can mount one host without cross-importing others. */

export type ComponentExamplesHostConfig = {
  componentId: string;
  exportNames: string[];
  kind: "component" | "form";
};

export type BlockExamplesHostConfig = {
  blockId: string;
  exportNames: string[];
};

export const COMPONENT_EXAMPLES_HOST_ATTR = "data-docs-examples-host";
export const BLOCK_EXAMPLES_HOST_ATTR = "data-docs-block-examples-host";

export function readComponentExamplesHostConfig(
  explicit?: Partial<ComponentExamplesHostConfig>,
): ComponentExamplesHostConfig | null {
  if (
    explicit?.componentId &&
    explicit.exportNames &&
    explicit.exportNames.length > 0
  ) {
    return {
      componentId: explicit.componentId,
      exportNames: explicit.exportNames,
      kind: explicit.kind ?? "component",
    };
  }

  const el = document.querySelector<HTMLElement>(
    `[${COMPONENT_EXAMPLES_HOST_ATTR}]`,
  );
  if (!el) return null;
  const componentId = el.dataset.componentId?.trim();
  const kind = el.dataset.kind === "form" ? "form" : "component";
  let exportNames: string[] = [];
  try {
    const parsed: unknown = JSON.parse(el.dataset.exportNames ?? "[]");
    if (Array.isArray(parsed)) {
      exportNames = parsed.filter((n): n is string => typeof n === "string");
    }
  } catch {
    return null;
  }
  if (!componentId || exportNames.length === 0) return null;
  return { componentId, exportNames, kind };
}

export function readBlockExamplesHostConfig(
  explicit?: Partial<BlockExamplesHostConfig>,
): BlockExamplesHostConfig | null {
  if (
    explicit?.blockId &&
    explicit.exportNames &&
    explicit.exportNames.length > 0
  ) {
    return { blockId: explicit.blockId, exportNames: explicit.exportNames };
  }

  const el = document.querySelector<HTMLElement>(
    `[${BLOCK_EXAMPLES_HOST_ATTR}]`,
  );
  if (!el) return null;
  const blockId = el.dataset.blockId?.trim();
  let exportNames: string[] = [];
  try {
    const parsed: unknown = JSON.parse(el.dataset.exportNames ?? "[]");
    if (Array.isArray(parsed)) {
      exportNames = parsed.filter((n): n is string => typeof n === "string");
    }
  } catch {
    return null;
  }
  if (!blockId || exportNames.length === 0) return null;
  return { blockId, exportNames };
}
