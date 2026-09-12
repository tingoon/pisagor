import ItemRoot from "./item.astro";
import ItemActions from "./item-actions.astro";
import ItemContent from "./item-content.astro";
import ItemDescription from "./item-description.astro";
import ItemFooter from "./item-footer.astro";
import ItemGroup from "./item-group.astro";
import ItemHeader from "./item-header.astro";
import ItemMedia from "./item-media.astro";
import ItemSeparator from "./item-separator.astro";
import ItemTitle from "./item-title.astro";

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
