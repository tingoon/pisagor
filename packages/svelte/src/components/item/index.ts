import ItemActions from "./item-actions.svelte";
import ItemContent from "./item-content.svelte";
import ItemDescription from "./item-description.svelte";
import ItemFooter from "./item-footer.svelte";
import ItemGroup from "./item-group.svelte";
import ItemHeader from "./item-header.svelte";
import ItemMedia from "./item-media.svelte";
import ItemRoot from "./item-root.svelte";
import ItemSeparator from "./item-separator.svelte";
import ItemTitle from "./item-title.svelte";

export const Item = Object.assign(ItemRoot, {
  Actions: ItemActions,
  Content: ItemContent,
  Description: ItemDescription,
  Footer: ItemFooter,
  Group: ItemGroup,
  Header: ItemHeader,
  Media: ItemMedia,
  Separator: ItemSeparator,
  Title: ItemTitle,
});
