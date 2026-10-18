import { Checkbox as CheckboxPrimitive } from "@ark-ui/solid";
import type {
  CheckboxControlProps,
  CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps,
} from "@ark-ui/solid";
import type {
  CheckboxGroupProps as BaseCheckboxGroupProps,
  CheckboxProps as BaseCheckboxProps,
} from "@pisagor/props";
import {
  checkboxGroupRecipe,
  checkboxRecipe,
  formControlToggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { SizeScaleProps } from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

export interface CheckboxGroupProps
  extends
    Omit<CheckboxPrimitiveGroupProps, "onValueChange">,
    BaseCheckboxGroupProps {
  onValueChange?: (value: string[]) => void;
}

export interface CheckboxProps
  extends CheckboxRootProps, BaseCheckboxProps, SizeScaleProps {
  variant?: FormControlVariant;
  onValueChange?: (value: boolean) => void;
}

type CheckboxIndicatorPartProps = CheckboxIndicatorProps &
  Pick<BaseCheckboxProps, "recipe">;

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
      class={(local.recipe ?? checkboxGroupRecipe)({ class: local.class })}
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
    "size",
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
          size: local.size ?? "md",
          surfaceVariant,
          variant: variant(),
        }),
        slots().base({ class: local.class }),
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
      class={slots().indicator({ class: local.class })}
    />
  );
}

/** Compound root: lays out `Checkbox.Control` and `Checkbox.Label`. */
export function CheckboxCompoundRoot(
  props: CheckboxRootProps & { recipe?: typeof checkboxRecipe },
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);

  return (
    <CheckboxPrimitive.Root
      {...rest}
      class={(local.recipe ?? checkboxRecipe)().root({ class: local.class })}
    />
  );
}

/** The styled box; renders check / minus indicators when empty. */
export function CheckboxControl(
  props: CheckboxControlProps &
    SizeScaleProps & {
      recipe?: typeof checkboxRecipe;
      variant?: FormControlVariant;
    },
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "recipe",
    "children",
    "class",
  ]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? "primary";
  const recipeFn = () => local.recipe ?? checkboxRecipe;

  return (
    <CheckboxPrimitive.Control
      {...rest}
      class={cn(
        formControlToggleRecipe({
          size: local.size ?? "md",
          surfaceVariant,
          variant: variant(),
        }),
        recipeFn()().base(),
        recipeFn()().control({ class: local.class }),
      )}
      data-variant={variant()}
    >
      {local.children ?? (
        <>
          <CheckboxIndicator recipe={recipeFn()}>
            <CheckIcon />
          </CheckboxIndicator>
          <CheckboxIndicator indeterminate recipe={recipeFn()}>
            <MinusIcon />
          </CheckboxIndicator>
        </>
      )}
    </CheckboxPrimitive.Control>
  );
}

export function CheckboxLabel(
  props: CheckboxLabelProps & { recipe?: typeof checkboxRecipe },
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);

  return (
    <CheckboxPrimitive.Label
      {...rest}
      class={(local.recipe ?? checkboxRecipe)().label({ class: local.class })}
    />
  );
}

export type { CheckboxCheckedState, CheckboxRootProps } from "@ark-ui/solid";

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxCompoundRoot,
});
