import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { ToolbarContract, ToolbarRootContract } from "@pisagor/props";
import { toolbarRecipe } from "@pisagor/recipes";
import { handleRovingFocusKeyDown } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
// #endregion

export type ToolbarTitleProps = HTMLArkProps<"h2">;
export type ToolbarDescriptionProps = ComponentProps<"p">;
export type ToolbarActionsProps = ComponentProps<"div">;
type ToolbarHeadingProps = ComponentProps<"div">;

export type ToolbarRootProps = ComponentProps<"div"> & ToolbarRootContract;

export interface ToolbarProps
  extends Omit<ToolbarRootProps, "children" | "title">, ToolbarContract {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  actionsProps?: Omit<ToolbarActionsProps, "children" | "class">;
  descriptionProps?: Omit<ToolbarDescriptionProps, "children" | "class">;
  titleProps?: Omit<ToolbarTitleProps, "children" | "class">;
}

export const ToolbarRoot: Component<ToolbarRootProps> = withProvider("div", {
  name: "Root",
  slot: "base",
});

export const ToolbarHeading: Component<ToolbarHeadingProps> = withContext(
  "div",
  { name: "Heading" },
);

export const ToolbarTitle: Component<ToolbarTitleProps> = withContext(ark.h2, {
  name: "Title",
});

export const ToolbarDescription: Component<ToolbarDescriptionProps> =
  withContext("p", { name: "Description" });

export const ToolbarActions: Component<ToolbarActionsProps> = withContext(
  "div",
  {
    defaultProps: {
      "aria-orientation": "horizontal",
      onKeyDown: handleRovingFocusKeyDown,
      role: "toolbar",
    },
    name: "Actions",
  },
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
