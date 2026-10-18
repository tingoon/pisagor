import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/solid";
import type {
  RadioGroupItemProps as RadioGroupItemPrimitiveProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupRootProps as RadioGroupRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  RadioGroupItemRootContract,
  RadioGroupPresetItem as BaseRadioGroupPresetItem,
  RadioGroupRootContract,
  RadioGroupContract,
} from "@pisagor/props";
import {
  formControlRadioToggleRecipe,
  radioGroupItemRecipe,
  radioGroupRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { Field } from "./field";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

interface RadioGroupPresetItem extends Omit<BaseRadioGroupPresetItem, "label"> {
  label: JSX.Element;
}

export interface RadioGroupRootProps
  extends
    Omit<RadioGroupRootPrimitiveProps, "onValueChange">,
    RadioGroupRootContract {
  onValueChange?: (value: string | null) => void;
}

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, "children">, RadioGroupContract {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps
  extends RadioGroupItemPrimitiveProps, RadioGroupItemRootContract {
  variant?: FormControlVariant;
}

export function RadioGroupRoot(props: RadioGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "onValueChange",
    "recipe",
    "class",
  ]);

  return (
    <RadioGroupPrimitive.Root
      {...rest}
      class={(local.recipe ?? radioGroupRecipe)({ class: local.class })}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
    >
      {local.children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem(props: RadioGroupItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "tabIndex",
    "children",
    "recipe",
    "class",
  ]);
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = () => (local.recipe ?? radioGroupItemRecipe)();

  return (
    <RadioGroupPrimitive.Item
      {...rest}
      class={slots().base({ class: local.class })}
    >
      <RadioGroupPrimitive.ItemControl
        class={cn(
          formControlRadioToggleRecipe({
            surfaceVariant,
            variant: variant(),
          }),
          slots().control(),
        )}
        data-variant={variant()}
      />
      <RadioGroupItemText>{local.children}</RadioGroupItemText>
      <RadioGroupPrimitive.ItemHiddenInput tabIndex={local.tabIndex} />
    </RadioGroupPrimitive.Item>
  );
}

export function RadioGroupItemText(
  props: RadioGroupItemTextProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <Field.Label
      asChild={(labelProps) => (
        <RadioGroupPrimitive.ItemText
          {...labelProps()}
          {...rest}
          class={local.class}
        >
          {local.children}
        </RadioGroupPrimitive.ItemText>
      )}
    />
  );
}

export function RadioGroupLabel(props: RadioGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <Field.Label
      asChild={(labelProps) => (
        <RadioGroupPrimitive.Label {...labelProps()} {...rest}>
          {local.children}
        </RadioGroupPrimitive.Label>
      )}
    />
  );
}

export function RadioGroupShorthand(props: RadioGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <RadioGroupRoot {...rest}>
      <For each={local.items ?? []}>
        {(item) => (
          <RadioGroupItem disabled={item.disabled} value={item.value}>
            {item.label}
          </RadioGroupItem>
        )}
      </For>
    </RadioGroupRoot>
  );
}

export type {
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/solid";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
