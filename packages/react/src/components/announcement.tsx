import { ark } from "@ark-ui/react/factory";
import type { AnnouncementProps as BaseAnnouncementRootProps } from "@pisagor/props";
import { announcementRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../utils";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
// #endregion

// #region Parts
export const AnnouncementRoot = withProvider(ark.div, {
  defaultProps: {
    role: "status",
  },
  name: "Root",
  slot: "base",
}) as FunctionComponent<
  Omit<ComponentProps<typeof ark.div>, "title"> & {
    role?: "status" | "alert";
  } & BaseAnnouncementRootProps
>;

export const AnnouncementTitle = withContext(ark.span, {
  name: "Title",
  slot: "title",
});
// #endregion

// #region Types
export type AnnouncementRootProps = ComponentProps<typeof AnnouncementRoot>;
export type AnnouncementTitleProps = ComponentProps<typeof AnnouncementTitle>;

export interface AnnouncementProps
  extends Omit<AnnouncementRootProps, "children"> {
  /** Optional badge or label rendered before the title. */
  badge?: ReactNode;
  /** Title content rendered inside `Announcement.Title`. */
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

AnnouncementShorthand.displayName = "Announcement";
// #endregion

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
