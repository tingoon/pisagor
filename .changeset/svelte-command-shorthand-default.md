---
"@pisagor/svelte": minor
---

Svelte `Command` is now the shorthand (`items`, `placeholder`, `emptyText`, `footer`, `classNames`); `Command.Shorthand` is removed (mirrors React and Solid). `Command.Dialog` is a shorthand that renders the dialog chrome (`trigger` snippet, hidden `title` / `description`) around its children. **Breaking:** compound usage starts from `Command.Root`; `Command.Input` is the plain combobox input (wrap it in `Command.Control` and compose the search icon yourself, e.g. `InputGroup` with `Command.Input asChild`); `Command.List` no longer adds a height-capped wrapper; `Command.Empty` no longer falls back to the default message; `Command.ItemGroup` drops `heading` (use `Command.ItemGroupLabel`); `Command.DialogTrigger` and `Command.DialogContent` are removed; `CommandShorthandItem` / `CommandShorthandProps` are now `CommandItem` / `CommandProps`.
