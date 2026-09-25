import { ark } from "@ark-ui/solid/factory";
import { type EmptyStateRecipeSlot, emptyStateRecipe } from "@pisagor/recipes/empty-state";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { EmptyStateContext, useEmptyState } from "./empty-state.context";

type EmptyStateTitleProps = ComponentProps<typeof ark.h3>;
type EmptyStateDescriptionProps = ComponentProps<typeof ark.p>;
type EmptyStateActionsProps = ComponentProps<typeof ark.div>;
type EmptyStateMediaProps = ComponentProps<typeof ark.div>;
type EmptyStateClassNames = VariantClassNames<EmptyStateRecipeSlot>;

type EmptyStateRootProps = Omit<ComponentProps<typeof ark.div>, "title"> & {
  recipe?: typeof emptyStateRecipe;
};

export interface EmptyStateProps extends Omit<EmptyStateRootProps, "children"> {
  actions?: JSX.Element;
  description?: JSX.Element;
  media?: JSX.Element;
  title?: JSX.Element;
  classNames?: EmptyStateClassNames;
  actionsProps?: Omit<EmptyStateActionsProps, "children" | "class">;
  descriptionProps?: Omit<EmptyStateDescriptionProps, "children" | "class">;
  mediaProps?: Omit<EmptyStateMediaProps, "children" | "class">;
  titleProps?: Omit<EmptyStateTitleProps, "children" | "class">;
}

export function EmptyStateRoot(props: EmptyStateRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "recipe", "class"]);
  const slots = () => (local.recipe ?? emptyStateRecipe)();

  return (
    <EmptyStateContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="empty-state"
      >
        {local.children}
      </ark.div>
    </EmptyStateContext>
  );
}

export function EmptyStateMedia(props: EmptyStateMediaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEmptyState();

  return (
    <ark.div
      {...rest}
      class={slots.media({ class: cn(local.class) })}
      data-part="media"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateTitle(props: EmptyStateTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEmptyState();

  return (
    <ark.h3
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateDescription(props: EmptyStateDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEmptyState();

  return (
    <ark.p
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="empty-state"
    />
  );
}

export function EmptyStateActions(props: EmptyStateActionsProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEmptyState();

  return (
    <ark.div
      {...rest}
      class={slots.actions({ class: cn(local.class) })}
      data-part="actions"
      data-scope="empty-state"
    />
  );
}

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
    "class",
    "classNames",
  ]);

  return (
    <EmptyStateRoot {...rest} class={local.class}>
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
        <EmptyStateDescription {...local.descriptionProps} class={local.classNames?.description}>
          {local.description}
        </EmptyStateDescription>
      </Show>
      <Show when={local.actions !== undefined}>
        <EmptyStateActions {...local.actionsProps} class={local.classNames?.actions}>
          {local.actions}
        </EmptyStateActions>
      </Show>
    </EmptyStateRoot>
  );
}
