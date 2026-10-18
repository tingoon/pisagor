/**
 * Highlight a deferred CodeBlock on first reveal (Code tab). When source
 * locator attrs are present, fetch plaintext first, then highlight. Reuses DOM
 * after the first run. Loads only grammars needed for `data-lang`.
 */

import type { PreviewSourceKind } from "./load-preview-source";

function sourceRefFromBlock(block: HTMLElement) {
  const framework = block.dataset.sourceFramework;
  const id = block.dataset.sourceId;
  const exportName = block.dataset.sourceExport;
  const kind = (block.dataset.sourceKind ?? "component") as PreviewSourceKind;
  if (!framework || !id || !exportName) return null;

  return { exportName, framework, id, kind };
}

function showCodeLoading(mount: HTMLElement) {
  if (mount.querySelector("[data-code-loading]")) return;
  const loading = document.createElement("div");
  loading.dataset.codeLoading = "";
  loading.setAttribute("aria-live", "polite");
  loading.className =
    "flex min-h-28 items-center justify-center py-8 text-muted-foreground";
  loading.innerHTML =
    '<svg aria-hidden="true" class="size-5 animate-spin" fill="currentColor" height="1em" role="img" viewBox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path></svg>';
  mount.replaceChildren(loading);
}

export async function ensureLazyCodeBlock(root: ParentNode): Promise<void> {
  const block = root.querySelector<HTMLElement>(
    "[data-codeblock][data-lazy]:not([data-highlighted]):not([data-source-loading])",
  );
  if (!block) return;

  const mount = block.querySelector<HTMLElement>("[data-code-mount]");
  if (!mount) return;

  let code = "";

  if (block.dataset.sourcePending !== undefined) {
    const ref = sourceRefFromBlock(block);
    if (!ref) return;

    block.dataset.sourceLoading = "";
    block.setAttribute("aria-busy", "true");
    showCodeLoading(mount);

    try {
      const { loadPreviewSource, resolvePreviewLang } =
        await import("./load-preview-source");
      code = await loadPreviewSource(ref);
      block.dataset.lang = resolvePreviewLang(
        block.dataset.lang ?? "tsx",
        code,
      );
      delete block.dataset.sourcePending;
    } catch (error) {
      const pre = document.createElement("pre");
      pre.className = "th-code";
      const el = document.createElement("code");
      el.textContent =
        error instanceof Error ? error.message : "Failed to load source";
      pre.appendChild(el);
      mount.replaceChildren(pre);
      delete block.dataset.sourcePending;
      delete block.dataset.sourceLoading;
      block.removeAttribute("aria-busy");

      return;
    }
  } else {
    code = mount.innerText;
  }

  if (!code.trim()) {
    delete block.dataset.sourceLoading;
    block.removeAttribute("aria-busy");

    return;
  }

  // Keep the spinner up through highlight so the Code tab never flashes plain text.
  if (!mount.querySelector("[data-code-loading]")) {
    showCodeLoading(mount);
  }

  const lang = block.dataset.lang ?? "tsx";
  const { highlightCode } = await import("./tanstack-highlight");
  mount.innerHTML = await highlightCode(code, lang);
  block.dataset.highlighted = "";
  delete block.dataset.sourceLoading;
  block.removeAttribute("aria-busy");
}
