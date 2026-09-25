import { ark } from "@ark-ui/solid/factory";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import {
  type InputGroupAddonVariantProps,
  type InputGroupButtonVariantProps,
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupTextRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Button, type ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

export interface InputGroupProps
  extends ComponentProps<typeof ark.div>,
    FormControlGroupShellVariantProps {}

export interface InputGroupAddonProps
  extends ComponentProps<typeof ark.div>,
    InputGroupAddonVariantProps {
  recipe?: typeof inputGroupAddonRecipe;
}

export interface InputGroupButtonProps
  extends Omit<ButtonProps, "size" | "recipe">,
    InputGroupButtonVariantProps {
  recipe?: typeof inputGroupButtonRecipe;
}

export interface InputGroupTextProps extends ComponentProps<typeof ark.span> {
  recipe?: typeof inputGroupTextRecipe;
}

export function InputGroupRoot(props: InputGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "class"]);
  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  return (
    <ark.div
      {...rest}
      class={formControlGroupShellRecipe({
        class: cn(local.class),
        size: size(),
        surfaceVariant,
        variant: variant(),
      })}
      data-part="root"
      data-scope="input-group"
      data-size={size()}
      data-variant={variant()}
      role="group"
    />
  );
}

export function InputGroupAddon(props: InputGroupAddonProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "align",
    "recipe",
    "class",
    "onClick",
  ]);
  const align = () => local.align ?? "inline-start";

  const handleClick: JSX.EventHandler<HTMLDivElement, MouseEvent> = (event) => {
    if ((event.target as HTMLElement).closest("button")) {
      return;
    }
    event.currentTarget.parentElement?.querySelector("input")?.focus();
    const onClick = local.onClick;
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <ark.div
      {...rest}
      class={(local.recipe ?? inputGroupAddonRecipe)({
        align: align(),
        class: cn(local.class),
      })}
      data-align={align()}
      data-part="addon"
      data-scope="input-group"
      onClick={handleClick}
      role="group"
    />
  );
}

export function InputGroupButton(props: InputGroupButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "recipe",
    "class",
  ]);

  return (
    <Button
      {...rest}
      class={(local.recipe ?? inputGroupButtonRecipe)({
        class: cn(local.class),
        size: local.size ?? "xs",
      })}
      data-part="button"
      data-scope="input-group"
      data-size={local.size ?? "xs"}
      variant={local.variant ?? "ghost"}
    />
  );
}

export function InputGroupText(props: InputGroupTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);

  return (
    <ark.span
      {...rest}
      class={(local.recipe ?? inputGroupTextRecipe)({ class: cn(local.class) })}
      data-part="text"
      data-scope="input-group"
    />
  );
}
