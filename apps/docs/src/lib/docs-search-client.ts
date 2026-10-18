/**
 * Header search backed by Pagefind's static index (`dist/pagefind`, built by
 * `pagefind --site dist` after `astro build`). The Pagefind runtime and index
 * chunks load only when the dialog opens for the first time.
 */

type PagefindResultData = {
  url: string;
  excerpt: string;
  meta: { title?: string };
};

type PagefindApi = {
  options: (opts: Record<string, unknown>) => Promise<void>;
  init?: () => Promise<void>;
  debouncedSearch: (
    term: string,
    opts?: { filters?: Record<string, string> },
    timeout?: number,
  ) => Promise<{
    results: { id: string; data: () => Promise<PagefindResultData> }[];
  } | null>;
};

let pagefindPromise: Promise<PagefindApi | null> | undefined;

function loadPagefind(base: string): Promise<PagefindApi | null> {
  pagefindPromise ??= (async () => {
    try {
      const url = `${base.replace(/\/?$/, "/")}pagefind/pagefind.js`;
      const api = (await import(/* @vite-ignore */ url)) as PagefindApi;
      await api.options({
        baseUrl: base.replace(/\/?$/, "/"),
        excerptLength: 18,
      });
      await api.init?.();

      return api;
    } catch {
      return null;
    }
  })();

  return pagefindPromise;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (ch) =>
      ({ "'": "&#39;", '"': "&quot;", "&": "&amp;", "<": "&lt;", ">": "&gt;" })[
        ch
      ] ?? ch,
  );
}

export function bindDocsSearch(root: HTMLElement) {
  if (root.dataset.bound === "1") return;
  root.dataset.bound = "1";

  const base = root.dataset.pagefindBase ?? "/";
  const framework = root.dataset.framework ?? "react";
  const openBtn = root.querySelector<HTMLButtonElement>(
    "[data-docs-search-open]",
  );
  const dialog = root.querySelector<HTMLDialogElement>(
    "[data-docs-search-dialog]",
  );
  const input = root.querySelector<HTMLInputElement>(
    "[data-docs-search-input]",
  );
  const closeBtn = root.querySelector<HTMLButtonElement>(
    "[data-docs-search-close]",
  );
  const status = root.querySelector<HTMLElement>("[data-docs-search-status]");
  const list = root.querySelector<HTMLElement>("[data-docs-search-results]");
  if (!openBtn || !dialog || !input || !status || !list) return;

  let active = -1;
  let seq = 0;

  const options = () => [
    ...list.querySelectorAll<HTMLAnchorElement>("a[role='option']"),
  ];

  function setActive(index: number) {
    const items = options();
    if (!input) return;
    active = items.length ? (index + items.length) % items.length : -1;
    items.forEach((item, i) => {
      const on = i === active;
      item.setAttribute("aria-selected", String(on));
      item.toggleAttribute("data-active", on);
      if (on) {
        input.setAttribute("aria-activedescendant", item.id);
        item.scrollIntoView({ block: "nearest" });
      }
    });
    if (active < 0) input.removeAttribute("aria-activedescendant");
  }

  function setStatus(text: string) {
    if (!status) return;
    status.textContent = text;
    status.hidden = text === "";
  }

  async function runSearch() {
    if (!input || !list) return;
    const term = input.value.trim();
    const ticket = ++seq;
    if (!term) {
      list.replaceChildren();
      input.setAttribute("aria-expanded", "false");
      setStatus(`Type to search the ${framework} docs.`);

      return;
    }
    const pagefind = await loadPagefind(base);
    if (ticket !== seq) return;
    if (!pagefind) {
      setStatus("Search is available on the built site (run the docs build).");

      return;
    }
    const search = await pagefind.debouncedSearch(
      term,
      { filters: { framework } },
      150,
    );
    if (search === null || ticket !== seq) return;
    const data = await Promise.all(
      search.results.slice(0, 10).map((result) => result.data()),
    );
    if (ticket !== seq) return;
    list.replaceChildren(
      ...data.map((item, index) => {
        const a = document.createElement("a");
        a.href = item.url;
        a.id = `docs-search-option-${index}`;
        a.setAttribute("role", "option");
        a.className =
          "docs-press block rounded-lg px-3 py-2 text-sm hover:bg-accent/60 data-active:bg-accent data-active:text-accent-foreground [&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground";
        // Pagefind excerpts are pre-escaped HTML with <mark> highlights.
        a.innerHTML = `<span class="block font-medium">${escapeHtml(
          item.meta.title ?? item.url,
        )}</span><span class="mt-0.5 line-clamp-2 block text-muted-foreground text-xs">${item.excerpt}</span>`;

        return a;
      }),
    );
    input.setAttribute("aria-expanded", String(data.length > 0));
    setStatus(data.length ? "" : `No results for “${term}”.`);
    setActive(data.length ? 0 : -1);
  }

  function open() {
    if (!dialog || !input) return;
    if (!dialog.open) dialog.showModal();
    input.focus();
    input.select();
    void loadPagefind(base);
  }

  function close() {
    dialog?.close();
  }

  openBtn.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    // Click on the backdrop (outside the panel box) closes.
    if (event.target === dialog) close();
  });
  dialog.addEventListener("close", () => openBtn.focus());
  input.addEventListener("input", () => void runSearch());
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive(active + (event.key === "ArrowDown" ? 1 : -1));
    } else if (event.key === "Escape") {
      // type="search" swallows the first Escape to clear itself; close instead.
      event.preventDefault();
      close();
    } else if (event.key === "Enter") {
      const target = options()[active];
      if (target) {
        event.preventDefault();
        target.click();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    const target = event.target as HTMLElement | null;
    const typing =
      target?.isContentEditable ||
      target?.tagName === "INPUT" ||
      target?.tagName === "TEXTAREA" ||
      target?.tagName === "SELECT";
    if (
      (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) ||
      (event.key === "/" && !typing)
    ) {
      event.preventDefault();
      open();
    }
  });
}
