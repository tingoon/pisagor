## Import

```ts
import { Provider } from "@pisagor/svelte";
```

## Examples

### Default

Wrap the app once so locale, icons, and toasts are shared by child components.

:::example Default
### Messages

Override built-in labels (aria labels, empty states, button text) by key. Every key has an English default in `defaultMessages` from `@pisagor/utils`; the `messages` you pass are merged over it, so a partial object is enough. Keys are typed as `MessageKey`, so they autocomplete.

:::example Messages
