---
"@pisagor/vue": minor
---

Vue `Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts; `SidebarMenuSubItem` is exported. The mobile sidebar renders a `Sheet` with a localized title / description and close button. **Breaking:** `Sidebar.Trigger` no longer renders a built-in `PhSidebarSimple` icon / sr-only label: it sets a localized `aria-label` and you pass the icon in its slot.
