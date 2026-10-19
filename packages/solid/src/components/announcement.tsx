import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  AnnouncementContract,
  AnnouncementRootContract,
} from "@pisagor/contracts";
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
export type AnnouncementRootProps = HTMLArkProps<"div"> &
  AnnouncementRootContract & {
    role?: "status" | "alert";
  };

export type AnnouncementTitleProps = ComponentProps<"span">;

export interface AnnouncementProps
  extends
    Omit<AnnouncementRootProps, "children" | "title">,
    AnnouncementContract {
  badge?: JSX.Element;
  title?: JSX.Element;
  /** Extra props forwarded to the announcement title element */
  titleProps?: Omit<AnnouncementTitleProps, "children" | "class">;
}
// #endregion

// #region Parts
export const AnnouncementRoot: Component<AnnouncementRootProps> = withProvider<
  ComponentProps<typeof ark.div> & AnnouncementRootContract
>(ark.div, {
  defaultProps: { role: "status" },
  name: "Root",
  slot: "base",
});

export const AnnouncementTitle = withContext<ComponentProps<"span">>("span", {
  name: "Title",
});
// #endregion

// #region Shorthand
export function AnnouncementShorthand(props: AnnouncementProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "badge",
    "title",
    "titleProps",
    "classNames",
  ]);

  return (
    <AnnouncementRoot {...rest}>
      {local.badge}
      <Show when={local.title !== undefined}>
        <AnnouncementTitle
          {...local.titleProps}
          class={local.classNames?.title}
        >
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
