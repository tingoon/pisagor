import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemRoot,
  ItemTitle,
} from "./item";
import { ItemGroup, ItemSeparator } from "./item-group";

export type {
  ItemActionsProps,
  ItemContentProps,
  ItemDescriptionProps,
  ItemFooterProps,
  ItemHeaderProps,
  ItemMediaProps,
  ItemProps,
  ItemTitleProps,
} from "./item";
export type { ItemGroupProps, ItemSeparatorProps } from "./item-group";

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
