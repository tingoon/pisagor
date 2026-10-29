---
"@pisagor/react": patch
"@pisagor/vue": patch
"@pisagor/solid": patch
"@pisagor/svelte": patch
"@pisagor/astro": patch
"@pisagor/utils": patch
"@pisagor/tokens": patch
"@pisagor/recipes": patch
"@pisagor/presets": patch
"@pisagor/contracts": patch
"@pisagor/react-form": patch
"@pisagor/vue-form": patch
"@pisagor/solid-form": patch
"@pisagor/svelte-form": patch
"@pisagor/mcp": patch
---

Resolve workspace and catalog dependency specifiers before npm publish so consumers no longer receive `workspace:*` or `catalog:` in published package manifests.
