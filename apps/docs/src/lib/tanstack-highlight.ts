import {
  createHighlighter,
  type Highlighter,
  type LanguageDefinition,
} from "@tanstack/highlight/core";

type LangId =
  | "css"
  | "html"
  | "js"
  | "json"
  | "jsx"
  | "shell"
  | "svelte"
  | "ts"
  | "tsx"
  | "vue";

/** Shared on every docs page (install snippets, JSON, TS). */
const BASE_LANGS: LangId[] = ["css", "js", "json", "shell", "ts"];

const LANG_LOADERS: Record<LangId, () => Promise<LanguageDefinition>> = {
  css: () => import("@tanstack/highlight/languages/css").then((m) => m.css),
  html: () => import("@tanstack/highlight/languages/html").then((m) => m.html),
  js: () => import("@tanstack/highlight/languages/js").then((m) => m.js),
  json: () => import("@tanstack/highlight/languages/json").then((m) => m.json),
  jsx: () => import("@tanstack/highlight/languages/jsx").then((m) => m.jsx),
  shell: () =>
    import("@tanstack/highlight/languages/shell").then((m) => m.shell),
  svelte: () =>
    import("@tanstack/highlight/languages/svelte").then((m) => m.svelte),
  ts: () => import("@tanstack/highlight/languages/ts").then((m) => m.ts),
  tsx: () => import("@tanstack/highlight/languages/tsx").then((m) => m.tsx),
  vue: () => import("@tanstack/highlight/languages/vue").then((m) => m.vue),
};

const LANG_ALIASES: Record<string, string> = {
  // No dedicated Astro grammar yet — frontmatter + markup reads best as html.
  astro: "html",
  bash: "shell",
  javascript: "js",
  mdx: "tsx",
  sh: "shell",
  shellscript: "shell",
  typescript: "ts",
  "vue-html": "vue",
  zsh: "shell",
};

const highlighterCache = new Map<string, Highlighter>();
const highlighterPending = new Map<string, Promise<Highlighter>>();

function resolveHighlightLang(lang: string): string {
  const key = lang.trim().toLowerCase();
  return LANG_ALIASES[key] ?? key;
}

/** Languages to register for a resolved highlight lang (excludes unused frameworks). */
function langsFor(resolved: string): LangId[] {
  const extra: LangId[] = [];
  switch (resolved) {
    case "tsx":
    case "jsx":
      extra.push("tsx", "jsx");
      break;
    case "vue":
      extra.push("vue");
      break;
    case "svelte":
      extra.push("svelte");
      break;
    case "html":
      extra.push("html");
      break;
    default:
      break;
  }
  return [...new Set<LangId>([...BASE_LANGS, ...extra])];
}

async function getHighlighter(langIds: LangId[]): Promise<Highlighter> {
  const key = langIds.slice().sort().join(",");
  const cached = highlighterCache.get(key);
  if (cached) return cached;

  let pending = highlighterPending.get(key);
  if (!pending) {
    pending = Promise.all(langIds.map((id) => LANG_LOADERS[id]())).then(
      (languages) => {
        const highlighter = createHighlighter({
          fallbackLanguage: "plaintext",
          languages,
        });
        highlighterCache.set(key, highlighter);
        highlighterPending.delete(key);
        return highlighter;
      },
    );
    highlighterPending.set(key, pending);
  }
  return pending;
}

/** Escape-safe highlighted HTML (`<pre class="th-code">…</pre>`). */
export async function highlightCode(
  code: string,
  lang: string,
): Promise<string> {
  const resolved = resolveHighlightLang(lang);
  const highlighter = await getHighlighter(langsFor(resolved));
  return highlighter.highlight(code, { lang: resolved }).html;
}
