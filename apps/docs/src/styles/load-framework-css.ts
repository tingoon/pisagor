import type { Framework } from "#/lib/nav";

/**
 * Resolved URL for shared docs chrome plus one `@pisagor/{framework}/styles`
 * entry. Omit `framework` for shared CSS only. Use with `<link rel="stylesheet">`
 * so Vite does not side-effect-inject every framework stylesheet.
 */
export async function frameworkStylesheetUrl(
  framework?: Framework,
): Promise<string> {
  switch (framework) {
    case "astro":
      return (await import("./frameworks/astro.css?url")).default;
    case "react":
      return (await import("./frameworks/react.css?url")).default;
    case "solid":
      return (await import("./frameworks/solid.css?url")).default;
    case "svelte":
      return (await import("./frameworks/svelte.css?url")).default;
    case "vue":
      return (await import("./frameworks/vue.css?url")).default;
    default:
      return (await import("./global.css?url")).default;
  }
}
