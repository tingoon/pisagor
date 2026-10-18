import type {
  InputGroupAddonRootContract,
  InputGroupButtonRootContract,
  InputGroupTextRootContract,
} from "@pisagor/props";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
  type InputGroupButtonVariantProps,
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupRootRecipe,
  inputGroupTextRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Button, type ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

export interface InputGroupProps
  extends ComponentProps<"div">, FormControlGroupShellVariantProps {}

export interface InputGroupAddonProps
  extends ComponentProps<"div">, InputGroupAddonRootContract {}

export interface InputGroupButtonProps
  extends
    Omit<ButtonProps, "size" | "recipe">,
    InputGroupButtonVariantProps,
    InputGroupButtonRootContract {}

export interface InputGroupTextProps
  extends ComponentProps<"span">, InputGroupTextRootContract {}

export function InputGroupRoot(props: InputGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "class"]);
  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? ("primary" as FormControlVariant);

  return (
    <div
      {...rest}
      class={formControlGroupShellRecipe({
        class: cn(inputGroupRootRecipe(), local.class),
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
    <div
      {...rest}
      class={(local.recipe ?? inputGroupAddonRecipe)({
        align: align(),
        class: local.class,
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
        class: local.class,
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
    <span
      {...rest}
      class={(local.recipe ?? inputGroupTextRecipe)({ class: local.class })}
      data-part="text"
      data-scope="input-group"
    />
  );
}
