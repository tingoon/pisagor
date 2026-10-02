---
title: Dropdown Menu
description: "Opens a list of actions or destinations from a trigger for navigation and overflow menus."
api: compound
taxonomy: standard
---

## When to use

- Open actions or destinations from a trigger when space for always-visible controls is limited.
- Prefer Dropdown Menu for overflow and secondary actions; keep primary actions visible.
- Use checkboxes, radios, and destructive items when the menu mixes selection and risky actions.

## Import

```ts
import { DropdownMenu } from "@pisagor/vue";
```

Style with `@pisagor/recipes/dropdown-menu` — no app-level `tv()`.

## Examples

### Default

Open actions from a trigger button.

:::example Default

### Shortcuts

Show keyboard shortcuts beside items for power users.

:::example Shortcuts

### Checkboxes

Toggle multiple options inside the menu.

:::example Checkboxes

### Destructive

Call out irreversible actions with destructive emphasis.

:::example Destructive

### Group Label

Label groups of related menu items.

:::example GroupLabel

### Icons

Lead items with icons for faster recognition.

:::example Icons

### Link

Navigate with link items when the action leaves the page.

:::example Link

### Nested

Open submenus for deeper action hierarchies.

:::example Nested

### Quick Item

Offer a compact item treatment for dense menus.

:::example QuickItem

### Radio Group

Pick exactly one option among menu items.

:::example RadioGroup

### With Scroll

Scroll long menus without growing past the viewport.

:::example WithScroll

### With Separator

Separate groups so sections stay scannable.

:::example WithSeparator

### Placements

Place the menu so it stays near the trigger.

:::example Placements
