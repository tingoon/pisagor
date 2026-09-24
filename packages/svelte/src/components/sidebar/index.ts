import SidebarContent from "./sidebar-content.svelte";
import SidebarFooter from "./sidebar-footer.svelte";
import SidebarGroup from "./sidebar-group.svelte";
import SidebarGroupAction from "./sidebar-group-action.svelte";
import SidebarGroupContent from "./sidebar-group-content.svelte";
import SidebarGroupLabel from "./sidebar-group-label.svelte";
import SidebarHeader from "./sidebar-header.svelte";
import SidebarInput from "./sidebar-input.svelte";
import SidebarInset from "./sidebar-inset.svelte";
import SidebarMenu from "./sidebar-menu.svelte";
import SidebarMenuAction from "./sidebar-menu-action.svelte";
import SidebarMenuBadge from "./sidebar-menu-badge.svelte";
import SidebarMenuButton from "./sidebar-menu-button.svelte";
import SidebarMenuItem from "./sidebar-menu-item.svelte";
import SidebarMenuSkeleton from "./sidebar-menu-skeleton.svelte";
import SidebarMenuSub from "./sidebar-menu-sub.svelte";
import SidebarMenuSubButton from "./sidebar-menu-sub-button.svelte";
import SidebarMenuSubItem from "./sidebar-menu-sub-item.svelte";
import SidebarProvider from "./sidebar-provider.svelte";
import SidebarRail from "./sidebar-rail.svelte";
import SidebarRoot from "./sidebar-root.svelte";
import SidebarSeparator from "./sidebar-separator.svelte";
import SidebarTrigger from "./sidebar-trigger.svelte";

export type { SidebarContextProps } from "./sidebar.context";
export { useSidebar } from "./sidebar.context";

export const Sidebar = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Input: SidebarInput,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubButton: SidebarMenuSubButton,
  MenuSubItem: SidebarMenuSubItem,
  Provider: SidebarProvider,
  Rail: SidebarRail,
  Separator: SidebarSeparator,
  Trigger: SidebarTrigger,
});
