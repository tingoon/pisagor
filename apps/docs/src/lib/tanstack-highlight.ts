import { createHighlighter } from "@tanstack/highlight/core";
import { css } from "@tanstack/highlight/languages/css";
import { html } from "@tanstack/highlight/languages/html";
import { js } from "@tanstack/highlight/languages/js";
import { json } from "@tanstack/highlight/languages/json";
import { jsx } from "@tanstack/highlight/languages/jsx";
import { shell } from "@tanstack/highlight/languages/shell";
import { ts } from "@tanstack/highlight/languages/ts";
import { tsx } from "@tanstack/highlight/languages/tsx";
import { vue } from "@tanstack/highlight/languages/vue";

/** Shared docs highlighter (SSR-safe, synchronous). */
export const docsHighlighter = createHighlighter({
  fallbackLanguage: "plaintext",
  languages: [css, html, js, json, jsx, shell, ts, tsx, vue],
});

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

export function resolveHighlightLang(lang: string): string {
  const key = lang.trim().toLowerCase();
  return LANG_ALIASES[key] ?? key;
}

/** Escape-safe highlighted HTML (`<pre class="th-code">…</pre>`). */
export function highlightCode(code: string, lang: string): string {
  return docsHighlighter.highlight(code, { lang: resolveHighlightLang(lang) }).html;
}
