import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { AnnouncementProps as BaseAnnouncementRootProps } from "@pisagor/props";
import { announcementRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
// #endregion

// #region Types
export type AnnouncementRootProps = Omit<HTMLArkProps<"div">, "title"> &
  BaseAnnouncementRootProps & {
    role?: "status" | "alert";
  };

export type AnnouncementTitleProps = ComponentProps<"span">;

export interface AnnouncementProps extends Omit<
  AnnouncementRootProps,
  "children"
> {
  /** Optional badge or label rendered before the title. */
  badge?: JSX.Element;
  /** Title content rendered inside `Announcement.Title`. */
  title?: JSX.Element;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Omit<AnnouncementTitleProps, "children" | "class">;
}
// #endregion

// #region Parts
export const AnnouncementRoot: Component<AnnouncementRootProps> = withProvider(
  ark.div,
  {
    defaultProps: { role: "status" },
    name: "Root",
    slot: "base",
  },
);

export const AnnouncementTitle = withContext("span", { name: "Title" });
// #endregion

// #region Shorthand
export function AnnouncementShorthand(props: AnnouncementProps): JSX.Element {
  const [local, rest] = splitProps(props, ["badge", "title", "titleProps"]);

  return (
    <AnnouncementRoot {...rest}>
      {local.badge}
      <Show when={local.title !== undefined}>
        <AnnouncementTitle {...local.titleProps}>
          {local.title}
        </AnnouncementTitle>
      </Show>
    </AnnouncementRoot>
  );
}
// #endregion

export const Announcement = Object.assign(AnnouncementShorthand, {
  Root: AnnouncementRoot,
  Title: AnnouncementTitle,
});
