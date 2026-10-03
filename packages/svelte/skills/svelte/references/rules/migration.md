# Radix / shadcn → Pisagor Svelte

- Imports: `@pisagor/svelte`, not `@/components/ui`.
- Utils: `cn` from `@pisagor/utils`.
- Icons: `phosphor-svelte` (e.g. `import PlusIcon from "phosphor-svelte/lib/PlusIcon"`) — not Lucide by default.
- Button loading prop is `loading`, not `isLoading`.
- Prefer `class` for this framework.
- Verify anatomy via MCP `get_example` / `get_component_source` before copying Radix snippets.
