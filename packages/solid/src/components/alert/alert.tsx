import { ark } from "@ark-ui/solid/factory";
import { type AlertRecipeSlot, type AlertVariantProps, alertRecipe } from "@pisagor/recipes/alert";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { AlertContext, useAlert } from "./alert.context";

type AlertTitleProps = ComponentProps<typeof ark.div>;
type AlertDescriptionProps = ComponentProps<typeof ark.div>;
type AlertActionProps = ComponentProps<typeof ark.div>;
type AlertClassNames = VariantClassNames<AlertRecipeSlot>;

type AlertRootProps = Omit<ComponentProps<typeof ark.div>, "title"> &
  AlertVariantProps & {
    recipe?: typeof alertRecipe;
  };

export interface AlertProps extends Omit<AlertRootProps, "children"> {
  action?: JSX.Element;
  description?: JSX.Element;
  icon?: JSX.Element;
  title?: JSX.Element;
  classNames?: AlertClassNames;
  actionProps?: Omit<AlertActionProps, "children" | "class">;
  descriptionProps?: Omit<AlertDescriptionProps, "children" | "class">;
  titleProps?: Omit<AlertTitleProps, "children" | "class">;
}

export function AlertRoot(props: AlertRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? alertRecipe)({ variant: local.variant });

  return (
    <AlertContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-part="root"
        data-scope="alert"
      >
        {local.children}
      </ark.div>
    </AlertContext>
  );
}

export function AlertTitle(props: AlertTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useAlert();

  return (
    <ark.div
      {...rest}
      class={slots.title({ class: cn(local.class) })}
      data-part="title"
      data-scope="alert"
    >
      {local.children}
    </ark.div>
  );
}

export function AlertDescription(props: AlertDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useAlert();

  return (
    <ark.div
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="alert"
    >
      {local.children}
    </ark.div>
  );
}

export function AlertAction(props: AlertActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useAlert();

  return (
    <ark.div
      {...rest}
      class={slots.action({ class: cn(local.class) })}
      data-part="action"
      data-scope="alert"
    >
      {local.children}
    </ark.div>
  );
}

export function AlertShorthand(props: AlertProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "action",
    "actionProps",
    "description",
    "descriptionProps",
    "icon",
    "title",
    "titleProps",
    "class",
    "classNames",
  ]);

  return (
    <AlertRoot {...rest} class={local.class} variant={local.variant}>
      {local.icon}
      <Show when={local.title !== undefined}>
        <AlertTitle {...local.titleProps} class={local.classNames?.title}>
          {local.title}
        </AlertTitle>
      </Show>
      <Show when={local.description !== undefined}>
        <AlertDescription {...local.descriptionProps} class={local.classNames?.description}>
          {local.description}
        </AlertDescription>
      </Show>
      <Show when={local.action !== undefined}>
        <AlertAction {...local.actionProps} class={local.classNames?.action}>
          {local.action}
        </AlertAction>
      </Show>
    </AlertRoot>
  );
}
