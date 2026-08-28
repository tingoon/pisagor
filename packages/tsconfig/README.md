# @pisagor/tsconfig

Shared TypeScript presets for the Pisagor monorepo.

## Presets

| Export | Use case |
| ------ | -------- |
| `@pisagor/tsconfig/base` | Framework-agnostic strict defaults (recipes, shared libs) |
| `@pisagor/tsconfig/bun` | Bun runtime/test packages (`types: bun`) |
| `@pisagor/tsconfig/react` | React libraries (`jsx: react-jsx`) |
| `@pisagor/tsconfig/react-vite` | Vite React apps (Storybook runner) |
| `@pisagor/tsconfig/react-stories` | Co-located React Storybook stories in packages |
| `@pisagor/tsconfig/vue` | Vue libraries |
| `@pisagor/tsconfig/vue-vite` | Vite Vue apps |
| `@pisagor/tsconfig/vue-stories` | Co-located Vue Storybook stories |

## CSS module declarations

`css-modules.d.ts` declares `@pisagor/tokens/styles`. Framework presets include it alongside their own `global.d.ts` (`@pisagor/react/styles` or `@pisagor/vue/styles`).

```json
{
  "extends": "@pisagor/tsconfig/react",
  "files": ["../../node_modules/@pisagor/tsconfig/react/global.d.ts"]
}
```

Package presets already list the required `files` — extend a preset rather than copying `compilerOptions`.
