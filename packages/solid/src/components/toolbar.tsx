import { ark } from "@ark-ui/solid/factory";
import type { ToolbarProps as BaseToolbarProps } from "@pisagor/props";
import { type ToolbarRecipeSlot, toolbarRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
// #endregion

export type ToolbarTitleProps = ComponentProps<typeof ark.h2>;
export type ToolbarDescriptionProps = ComponentProps<typeof ark.p>;
export type ToolbarActionsProps = ComponentProps<typeof ark.div>;
type ToolbarHeadingProps = ComponentProps<typeof ark.div>;
type ToolbarClassNames = VariantClassNames<ToolbarRecipeSlot>;

export type ToolbarRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  BaseToolbarProps;

export interface ToolbarProps extends Omit<ToolbarRootProps, "children"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  classNames?: ToolbarClassNames;
  actionsProps?: Omit<ToolbarActionsProps, "children" | "class">;
  descriptionProps?: Omit<ToolbarDescriptionProps, "children" | "class">;
  titleProps?: Omit<ToolbarTitleProps, "children" | "class">;
}

export const ToolbarRoot: Component<ToolbarRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const ToolbarHeading: Component<ToolbarHeadingProps> = withContext(
  ark.div,
  { name: "Heading" },
);

export const ToolbarTitle: Component<ToolbarTitleProps> = withContext(ark.h2, {
  name: "Title",
});

export const ToolbarDescription: Component<ToolbarDescriptionProps> =
  withContext(ark.p, { name: "Description" });

export const ToolbarActions: Component<ToolbarActionsProps> = withContext(
  ark.div,
  { name: "Actions" },
);

export function ToolbarShorthand(props: ToolbarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "actions",
    "actionsProps",
    "description",
    "descriptionProps",
    "title",
    "titleProps",
    "class",
    "classNames",
  ]);

  return (
    <ToolbarRoot {...rest} class={local.class}>
      <Show when={local.title !== undefined || local.description !== undefined}>
        <ToolbarHeading class={local.classNames?.heading}>
          <Show when={local.title !== undefined}>
            <ToolbarTitle {...local.titleProps} class={local.classNames?.title}>
              {local.title}
            </ToolbarTitle>
          </Show>
          <Show when={local.description !== undefined}>
            <ToolbarDescription
              {...local.descriptionProps}
              class={local.classNames?.description}
            >
              {local.description}
            </ToolbarDescription>
          </Show>
        </ToolbarHeading>
      </Show>
      <Show when={local.actions !== undefined}>
        <ToolbarActions
          {...local.actionsProps}
          class={local.classNames?.actions}
        >
          {local.actions}
        </ToolbarActions>
      </Show>
    </ToolbarRoot>
  );
}

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
