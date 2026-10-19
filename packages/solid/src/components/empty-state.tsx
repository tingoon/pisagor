import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type {
  EmptyStateContract,
  EmptyStateRootContract,
} from "@pisagor/contracts";
import { emptyStateRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Types
export type EmptyStateRootProps = HTMLArkProps<"div"> & EmptyStateRootContract;
export type EmptyStateMediaProps = ComponentProps<"div">;
export type EmptyStateTitleProps = HTMLArkProps<"h3">;
export type EmptyStateDescriptionProps = ComponentProps<"p">;
export type EmptyStateActionsProps = ComponentProps<"div">;

export interface EmptyStateProps
  extends Omit<EmptyStateRootProps, "children" | "title">, EmptyStateContract {
  actions?: JSX.Element;
  description?: JSX.Element;
  media?: JSX.Element;
  title?: JSX.Element;
  /** Extra props forwarded to the actions element */
  actionsProps?: Omit<EmptyStateActionsProps, "children" | "class">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<EmptyStateDescriptionProps, "children" | "class">;
  /** Extra props forwarded to the media element */
  mediaProps?: Omit<EmptyStateMediaProps, "children" | "class">;
  /** Extra props forwarded to the title element */
  titleProps?: Omit<EmptyStateTitleProps, "children" | "class">;
}
// #endregion

// #region Parts
export const EmptyStateRoot: Component<EmptyStateRootProps> =
  withProvider<EmptyStateRootContract>(ark.div, { name: "Root", slot: "base" });

export const EmptyStateMedia = withContext("div", { name: "Media" });

export const EmptyStateTitle = withContext(ark.h3, { name: "Title" });

export const EmptyStateDescription = withContext("p", {
  name: "Description",
});

export const EmptyStateActions = withContext("div", { name: "Actions" });
// #endregion

// #region Shorthand
export function EmptyStateShorthand(props: EmptyStateProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "actionsProps",
    "description",
    "descriptionProps",
    "media",
    "mediaProps",
    "title",
    "titleProps",
    "classNames",
  ]);

  return (
    <EmptyStateRoot {...rest}>
      <Show when={local.media !== undefined}>
        <EmptyStateMedia {...local.mediaProps} class={local.classNames?.media}>
          {local.media}
        </EmptyStateMedia>
      </Show>
      <Show when={local.title !== undefined}>
        <EmptyStateTitle {...local.titleProps} class={local.classNames?.title}>
          {local.title}
        </EmptyStateTitle>
      </Show>
      <Show when={local.description !== undefined}>
        <EmptyStateDescription
          {...local.descriptionProps}
          class={local.classNames?.description}
        >
          {local.description}
        </EmptyStateDescription>
      </Show>
      <Show when={local.actions !== undefined}>
        <EmptyStateActions
          {...local.actionsProps}
          class={local.classNames?.actions}
        >
          {local.actions}
        </EmptyStateActions>
      </Show>
    </EmptyStateRoot>
  );
}
// #endregion

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
