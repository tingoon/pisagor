/**
 * Highlight a deferred CodeBlock on first reveal (Code tab).
 * When source locator attrs are present, fetch plaintext first, then highlight.
 * Reuses DOM after the first run. Loads only grammars needed for `data-lang`.
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

export async function ensureLazyCodeBlock(root: ParentNode): Promise<void> {
  const block = root.querySelector<HTMLElement>(
    "[data-codeblock][data-lazy]:not([data-highlighted]):not([data-source-loading])",
  );
  if (!block) return;

  const mount = block.querySelector<HTMLElement>("[data-code-mount]");
  if (!mount) return;

  if (block.dataset.sourcePending !== undefined) {
    const ref = sourceRefFromBlock(block);
    if (!ref) return;

    block.dataset.sourceLoading = "";
    try {
      const { loadPreviewSource, resolvePreviewLang } = await import(
        "./load-preview-source"
      );
      const code = await loadPreviewSource(ref);
      const lang = resolvePreviewLang(block.dataset.lang ?? "tsx", code);
      block.dataset.lang = lang;

      const pre = document.createElement("pre");
      pre.className = "th-code";
      const el = document.createElement("code");
      el.textContent = code;
      pre.appendChild(el);
      mount.replaceChildren(pre);
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
      return;
    }
    delete block.dataset.sourceLoading;
  }

  const code = mount.innerText;
  if (!code.trim()) return;

  const lang = block.dataset.lang ?? "tsx";
  const { highlightCode } = await import("./tanstack-highlight");
  mount.innerHTML = await highlightCode(code, lang);
  block.dataset.highlighted = "";
}
