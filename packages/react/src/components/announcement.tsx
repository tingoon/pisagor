import { ark } from "@ark-ui/react";
import type {
  AnnouncementContract,
  AnnouncementRootContract,
} from "@pisagor/contracts";
import { announcementRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
// #endregion

// #region Parts
export const AnnouncementRoot = withProvider<
  ComponentProps<typeof ark.div> & AnnouncementRootContract
>(ark.div, {
  name: "Root",
  slot: "base",
});

export const AnnouncementTitle = withContext<ComponentProps<"span">>("span", {
  name: "Title",
  slot: "title",
});
// #endregion

// #region Types
export type AnnouncementRootProps = Omit<
  ComponentProps<typeof AnnouncementRoot>,
  "role"
> & {
  role?: "status" | "alert";
};
export type AnnouncementTitleProps = ComponentProps<typeof AnnouncementTitle>;

export interface AnnouncementProps
  extends
    Omit<AnnouncementRootProps, "children" | "title">,
    AnnouncementContract {
  badge?: ReactNode;
  title?: ReactNode;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Omit<AnnouncementTitleProps, "children" | "className">;
}
// #endregion

// #region Shorthand
export function AnnouncementShorthand({
  badge,
  title,
  titleProps,
  ...rest
}: AnnouncementProps) {
  return (
    <AnnouncementRoot {...rest}>
      {badge}
      {title !== undefined && (
        <AnnouncementTitle {...titleProps}>{title}</AnnouncementTitle>
      )}
    </AnnouncementRoot>
  );
}
// #endregion

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
