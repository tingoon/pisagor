import {
  type CheckboxIndicatorProps,
  Checkbox as CheckboxPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  type CheckboxRootProps,
} from "@ark-ui/solid/checkbox";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes/checkbox";
import { formControlToggleRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

export interface CheckboxGroupProps
  extends Omit<CheckboxPrimitiveGroupProps, "onValueChange"> {
  onValueChange?: (value: string[]) => void;
  recipe?: typeof checkboxGroupRecipe;
}

export interface CheckboxProps extends CheckboxRootProps {
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
  recipe?: typeof checkboxRecipe;
}

type CheckboxIndicatorPartProps = CheckboxIndicatorProps & {
  recipe?: typeof checkboxRecipe;
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="1em"
      viewBox="0 0 256 256"
      width="1em"
    >
      <path
        d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="1em"
      viewBox="0 0 256 256"
      width="1em"
    >
      <path
        d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckboxGroup(props: CheckboxGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onValueChange", "recipe", "class"]);

  return (
    <CheckboxPrimitive.Group
      {...rest}
      class={(local.recipe ?? checkboxGroupRecipe)({ class: cn(local.class) })}
      onValueChange={local.onValueChange}
    />
  );
}

export function CheckboxRoot(props: CheckboxProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "tabIndex",
    "onCheckedChange",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const recipeFn = () => local.recipe ?? checkboxRecipe;
  const slots = () => recipeFn()();

  return (
    <CheckboxPrimitive.Root
      {...rest}
      class={cn(
        formControlToggleRecipe({
          size: "md",
          surfaceVariant,
          variant: variant(),
        }),
        slots().base({ class: cn(local.class) }),
      )}
      data-variant={variant()}
      onCheckedChange={
        local.onCheckedChange || local.onValueChange
          ? (details) => {
              local.onCheckedChange?.(details);
              local.onValueChange?.(details.checked === true);
            }
          : undefined
      }
      role="checkbox"
    >
      <CheckboxPrimitive.Control>
        <CheckboxIndicator recipe={recipeFn()}>
          <CheckIcon />
        </CheckboxIndicator>
        <CheckboxIndicator indeterminate recipe={recipeFn()}>
          <MinusIcon />
        </CheckboxIndicator>
      </CheckboxPrimitive.Control>
      <CheckboxPrimitive.HiddenInput tabIndex={local.tabIndex} />
    </CheckboxPrimitive.Root>
  );
}

function CheckboxIndicator(props: CheckboxIndicatorPartProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const slots = () => (local.recipe ?? checkboxRecipe)();

  return (
    <CheckboxPrimitive.Indicator
      {...rest}
      class={slots().indicator({ class: cn(local.class) })}
    />
  );
}
