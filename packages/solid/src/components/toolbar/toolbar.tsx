import { ark } from "@ark-ui/solid/factory";
import {
  type ToolbarRecipeSlot,
  toolbarRecipe,
} from "@pisagor/recipes/toolbar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { ToolbarContext, useToolbar } from "./toolbar.context";

type ToolbarTitleProps = ComponentProps<typeof ark.h2>;
type ToolbarDescriptionProps = ComponentProps<typeof ark.p>;
type ToolbarActionsProps = ComponentProps<typeof ark.div>;
type ToolbarHeadingProps = ComponentProps<typeof ark.div>;
type ToolbarClassNames = VariantClassNames<ToolbarRecipeSlot>;

type ToolbarRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & {
  recipe?: typeof toolbarRecipe;
};

export interface ToolbarProps extends Omit<ToolbarRootProps, "children"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  title?: JSX.Element;
  classNames?: ToolbarClassNames;
  actionsProps?: Omit<ToolbarActionsProps, "children" | "class">;
  descriptionProps?: Omit<ToolbarDescriptionProps, "children" | "class">;
  titleProps?: Omit<ToolbarTitleProps, "children" | "class">;
}

export function ToolbarRoot(props: ToolbarRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? toolbarRecipe)();
  return (
    <ToolbarContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="toolbar"
      >
        {local.children}
      </ark.div>
    </ToolbarContext>
  );
}

export function ToolbarHeading(props: ToolbarHeadingProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useToolbar();
  return (
    <ark.div
      {...rest}
      class={slots.heading({ class: cn(local.class) })}
      data-part="heading"
      data-scope="toolbar"
    />
  );
}

export function ToolbarTitle(props: ToolbarTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useToolbar();
  return (
    <ark.h2
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="toolbar"
    />
  );
}

export function ToolbarDescription(
  props: ToolbarDescriptionProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useToolbar();
  return (
    <ark.p
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="toolbar"
    />
  );
}

export function ToolbarActions(props: ToolbarActionsProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useToolbar();
  return (
    <ark.div
      {...rest}
      class={slots.actions({ class: cn(local.class) })}
      data-part="actions"
      data-scope="toolbar"
    />
  );
}

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
