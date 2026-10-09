import {
  type SwitchControlProps,
  type SwitchHiddenInputProps,
  Switch as SwitchPrimitive,
  type SwitchRootProps as SwitchPrimitiveRootProps,
  type SwitchThumbProps,
} from "@ark-ui/solid/switch";
import type { SwitchProps as BaseSwitchRootProps } from "@pisagor/props";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SwitchStylesContext, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

type FormControlVariant = "primary" | "secondary";
type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type SwitchRootProps = SwitchPrimitiveRootProps & {
  variant?: FormControlVariant;
} & BaseSwitchRootProps;

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
  onValueChange?: (value: boolean) => void;
  classNames?: SwitchClassNames;
  controlProps?: Omit<SwitchControlProps, "children" | "class">;
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
  thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
}

/** Surface variant comes from the nearest form-control surface. */
function SwitchRoot(props: SwitchRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "recipe", "class"]);
  const surfaceVariant = useFormControlSurface();
  const shellArgs = () => ({
    surfaceVariant,
    variant: local.variant ?? ("primary" as FormControlVariant),
  });
  const slots = createMemo(() =>
    (local.recipe ?? switchRecipe)({ ...shellArgs() }),
  );

  return (
    <SwitchStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return shellArgs();
        },
      }}
    >
      <SwitchPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        data-variant={shellArgs().variant}
      />
    </SwitchStylesContext>
  );
}

const SwitchControl: Component<SwitchControlProps> = withContext(
  SwitchPrimitive.Control,
  { name: "Control" },
);

const SwitchThumb: Component<SwitchThumbProps> = withContext(
  SwitchPrimitive.Thumb,
  { name: "Thumb" },
);

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

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/solid/switch";
