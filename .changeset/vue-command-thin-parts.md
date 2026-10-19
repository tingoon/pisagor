---
"@pisagor/vue": minor
---

Vue `Command` follows the thin parts + shorthand pattern (mirrors React). `Command` is now the shorthand; adds `Command.Root` and `Command.Control`. **Breaking:** compound usage starts from `Command.Root`; `Command.Shorthand`, `Command.DialogContent` and `Command.DialogTrigger` were removed (use `Command` and `Command.Dialog`); `Item`, `ItemGroup` and `ItemGroupLabel` are the Combobox parts; named `CommandRoot`, `CommandInput`, … component exports are removed (use `Command.*`; the `*Props` types are still exported).
