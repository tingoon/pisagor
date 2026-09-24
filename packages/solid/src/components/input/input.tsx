import { type FieldInputProps, FieldInput as InputPrimitive } from "@ark-ui/solid/field";
import {
  type InputRecipeSlot,
  type InputRootVariantProps,
  inputRecipe,
  inputRootRecipe,
} from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../../hooks";
import type { VariantClassNames } from "../../internal/types";
import { callEventHandler } from "../../utils";
import { InputGroupRoot } from "../input-group/input-group-core";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { InputClearAddon } from "./input-clear-button";

type FormControlVariant = "primary" | "secondary";
type InputClassNames = VariantClassNames<InputRecipeSlot>;
type InputVariantProps = InputRootVariantProps;

export interface InputProps extends Omit<FieldInputProps, "size">, InputVariantProps {
  /** Initial value when uncontrolled. Solid has no native defaultValue on inputs. */
  defaultValue?: string | number | readonly string[];
  clearable?: boolean;
  onValueChange?: (value: string) => void;
  recipe?: typeof inputRecipe;
  rootRecipe?: typeof inputRootRecipe;
  classNames?: InputClassNames;
}

export function Input(props: InputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "defaultValue",
    "disabled",
    "readOnly",
    "type",
    "value",
    "ref",
    "onChange",
    "onValueChange",
    "recipe",
    "rootRecipe",
    "class",
    "classNames",
  ]);

  const surfaceVariant = useFormControlSurface();
  const size = () => local.size ?? "md";
  const type = () => local.type ?? "text";
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const clearable = () => local.clearable ?? false;
  const skipClearable = () => !clearable() || type() === "file" || type() === "password";

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput<HTMLInputElement>({
    get clearable() {
      return clearable() && type() !== "file" && type() !== "password";
    },
    get defaultValue() {
      return local.defaultValue;
    },
    get disabled() {
      return local.disabled;
    },
    get onChange() {
      return (event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }) => {
        callEventHandler(local.onChange, event);
      };
    },
    get onValueChange() {
      return local.onValueChange;
    },
    get readOnly() {
      return local.readOnly;
    },
    get ref() {
      return typeof local.ref === "function" ? local.ref : undefined;
    },
    get type() {
      return type();
    },
    get value() {
      return local.value;
    },
  });

  const shellArgs = () => ({
    surfaceVariant,
    variant: variant(),
  });
  const slots = () => (local.recipe ?? inputRecipe)();
  const rootRecipeFn = () => local.rootRecipe ?? inputRootRecipe;

  const applyDefaultValueRef = (el: HTMLInputElement) => {
    if (local.value === undefined && local.defaultValue !== undefined && el.value === "") {
      el.value = String(local.defaultValue);
    }
    if (typeof local.ref === "function") {
      local.ref(el);
    }
  };

  return (
    <Show
      fallback={
        <InputPrimitive
          {...rest}
          class={rootRecipeFn()({ class: cn(local.class), size: size(), ...shellArgs() })}
          data-size={size()}
          data-variant={variant()}
          disabled={local.disabled}
          onChange={
            local.onChange || local.onValueChange
              ? (event) => {
                  callEventHandler(local.onChange, event);
                  local.onValueChange?.(event.currentTarget.value);
                }
              : undefined
          }
          readOnly={local.readOnly}
          ref={applyDefaultValueRef}
          type={type()}
          value={local.value}
        />
      }
      when={!skipClearable()}
    >
      <InputGroupRoot size={size()} variant={local.variant}>
        <InputPrimitive
          {...rest}
          class={slots().clearableRoot({
            class: cn(local.class, local.classNames?.clearableRoot),
          })}
          data-size={size()}
          disabled={local.disabled}
          onChange={handleChange}
          readOnly={local.readOnly}
          ref={mergedRef}
          type={type()}
          value={local.value}
        />
        <Show when={canClear()}>
          <InputClearAddon onClear={handleClear} />
        </Show>
      </InputGroupRoot>
    </Show>
  );
}
