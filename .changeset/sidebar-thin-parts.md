---
"@pisagor/react": minor
---

`Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts. `Sidebar.Trigger` no longer renders a built-in `SidebarSimpleIcon` / sr-only label: it sets a localized `aria-label` and you pass the icon as children.
