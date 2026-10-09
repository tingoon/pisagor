import { ark } from "@ark-ui/solid/factory";
import type { EmptyStateProps as BaseEmptyStateRootProps } from "@pisagor/props";
import { type EmptyStateRecipeSlot, emptyStateRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
// #endregion

// #region Types
export type EmptyStateRootProps = Omit<
  ComponentProps<typeof ark.div>,
  "title"
> &
  BaseEmptyStateRootProps;
export type EmptyStateMediaProps = ComponentProps<typeof ark.div>;
export type EmptyStateTitleProps = ComponentProps<typeof ark.h3>;
export type EmptyStateDescriptionProps = ComponentProps<typeof ark.p>;
export type EmptyStateActionsProps = ComponentProps<typeof ark.div>;

type EmptyStateClassNames = VariantClassNames<EmptyStateRecipeSlot>;

export interface EmptyStateProps extends Omit<EmptyStateRootProps, "children"> {
  /** Action buttons or links. */
  actions?: JSX.Element;
  /** Supporting copy. */
  description?: JSX.Element;
  /** Icon or illustration shown above the title. */
  media?: JSX.Element;
  /** Primary heading. */
  title?: JSX.Element;
  /** Slot class names */
  classNames?: EmptyStateClassNames;
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
export const EmptyStateRoot: Component<EmptyStateRootProps> = withProvider(
  ark.div,
  { name: "Root", slot: "base" },
);

export const EmptyStateMedia = withContext(ark.div, { name: "Media" });

export const EmptyStateTitle = withContext(ark.h3, { name: "Title" });

export const EmptyStateDescription = withContext(ark.p, {
  name: "Description",
});

export const EmptyStateActions = withContext(ark.div, { name: "Actions" });
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
