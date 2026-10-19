---
"@pisagor/react": minor
---

React `Command` is now the shorthand (`items`, `placeholder`, `emptyText`, `footer`,
`classNames`); `Command.Shorthand` is removed. `Command.Dialog` is a shorthand that renders the
dialog chrome (`trigger`, hidden `title` / `description`) around its children.

**Breaking (React):**

- Compound usage starts from `Command.Root`.
- `Command.Input` is the plain combobox input: wrap it in `Command.Control` and compose the
  search icon yourself (for example with `InputGroup` and `Command.Input asChild`).
- `Command.List` no longer adds a height-capped wrapper.
- `Command.Empty` no longer falls back to the default message (the shorthand still does).
- `Command.DialogTrigger` and `Command.DialogContent` are removed; pass `trigger` and children
  to `Command.Dialog`.
- Named `CommandRoot`, `CommandInput`, … function exports are removed; `CommandShorthandItem` is
  now `CommandItem` and `CommandShorthandProps` is now `CommandProps`.
