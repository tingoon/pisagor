import {
  type SwitchControlProps,
  type SwitchHiddenInputProps,
  Switch as SwitchPrimitive,
  type SwitchRootProps as SwitchPrimitiveRootProps,
  type SwitchThumbProps,
} from "@ark-ui/solid/switch";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes/switch";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { SwitchContext, useSwitch } from "./switch.context";

type FormControlVariant = "primary" | "secondary";
type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type SwitchRootProps = SwitchPrimitiveRootProps & {
  variant?: FormControlVariant;
  recipe?: typeof switchRecipe;
};

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
  onValueChange?: (value: boolean) => void;
  classNames?: SwitchClassNames;
  controlProps?: Omit<SwitchControlProps, "children" | "class">;
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
  thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
}

function SwitchRoot(props: SwitchRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "recipe", "class"]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = () =>
    (local.recipe ?? switchRecipe)({
      surfaceVariant,
      variant: variant(),
    });

  return (
    <SwitchContext value={{ slots: slots() }}>
      <SwitchPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-variant={variant()}
      >
        {local.children}
      </SwitchPrimitive.Root>
    </SwitchContext>
  );
}

function SwitchControl(props: SwitchControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useSwitch();

  return (
    <SwitchPrimitive.Control {...rest} class={slots.control({ class: cn(local.class) })}>
      {local.children}
    </SwitchPrimitive.Control>
  );
}

function SwitchThumb(props: SwitchThumbProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSwitch();

  return <SwitchPrimitive.Thumb {...rest} class={slots.thumb({ class: cn(local.class) })} />;
}

function SwitchHiddenInput(props: SwitchHiddenInputProps): JSX.Element {
  return <SwitchPrimitive.HiddenInput {...props} />;
}

export function Switch(props: SwitchProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "controlProps",
    "hiddenInputProps",
    "thumbProps",
    "onCheckedChange",
    "onValueChange",
    "class",
    "classNames",
  ]);

  return (
    <SwitchRoot
      {...rest}
      class={local.class}
      onCheckedChange={
        local.onCheckedChange || local.onValueChange
          ? (details) => {
              local.onCheckedChange?.(details);
              local.onValueChange?.(details.checked === true);
            }
          : undefined
      }
      variant={local.variant}
    >
      <SwitchControl {...local.controlProps} class={local.classNames?.control}>
        <SwitchThumb {...local.thumbProps} class={local.classNames?.thumb} />
      </SwitchControl>
      <SwitchHiddenInput {...local.hiddenInputProps} />
    </SwitchRoot>
  );
}
