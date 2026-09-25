import {
  type PasswordInputIndicatorProps,
  type PasswordInputInputProps,
  PasswordInput as PasswordInputPrimitive,
  type PasswordInputRootProps as PasswordInputPrimitiveRootProps,
  type PasswordInputVisibilityTriggerProps as PasswordInputPrimitiveVisibilityTriggerProps,
} from "@ark-ui/solid/password-input";
import { passwordInputRecipe } from "@pisagor/recipes/password-input";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../../hooks";
import { EyeIcon, EyeSlashIcon, XIcon } from "../../internal/icons";
import { callEventHandler } from "../../utils";
import { InputGroup, type InputGroupButtonProps, type InputGroupProps } from "../input-group";

type FormControlVariant = "primary" | "secondary";

export type PasswordInputRootProps = Pick<
  PasswordInputPrimitiveRootProps,
  "class" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps = Omit<
  PasswordInputPrimitiveVisibilityTriggerProps,
  "asChild"
>;

export interface PasswordInputProps
  extends PasswordInputRootProps,
    Omit<PasswordInputInputProps, "class" | "size"> {
  size?: InputGroupProps["size"];
  variant?: FormControlVariant;
  defaultValue?: string | number | readonly string[];
  clearable?: boolean;
  onValueChange?: (value: string) => void;
  recipe?: typeof passwordInputRecipe;
  clearButtonProps?: InputGroupButtonProps;
  indicatorProps?: PasswordInputIndicatorProps;
  visibilityTriggerProps?: PasswordInputVisibilityTriggerProps;
}

export function PasswordInput(props: PasswordInputProps): JSX.Element {
  const [local, inputProps] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "defaultValue",
    "defaultVisible",
    "disabled",
    "invalid",
    "readOnly",
    "value",
    "clearButtonProps",
    "indicatorProps",
    "ref",
    "visibilityTriggerProps",
    "visible",
    "onChange",
    "onValueChange",
    "onVisibilityChange",
    "recipe",
    "class",
  ]);

  const size = () => local.size ?? "md";
  const clearable = () => local.clearable ?? false;
  const slots = () => (local.recipe ?? passwordInputRecipe)();

  const [indicatorLocal, restIndicatorProps] = splitProps(local.indicatorProps ?? {}, [
    "fallback",
    "children",
  ]);
  const [clearLocal, restClearButtonProps] = splitProps(local.clearButtonProps ?? {}, [
    "onClick",
    "children",
  ]);

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput<HTMLInputElement>({
    get clearable() {
      return clearable();
    },
    get defaultValue() {
      return local.defaultValue;
    },
    get disabled() {
      return local.disabled;
    },
    get onChange() {
      return (event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }) =>
        callEventHandler(local.onChange, event);
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
    get value() {
      return local.value;
    },
  });

  return (
    <PasswordInputPrimitive.Root
      class={slots().base({ class: cn(local.class) })}
      data-size={size()}
      defaultVisible={local.defaultVisible}
      invalid={local.invalid}
      onVisibilityChange={local.onVisibilityChange}
      visible={local.visible}
    >
      <PasswordInputPrimitive.Control
        asChild={(controlProps) => (
          <InputGroup
            {...controlProps({
              class: slots().control(),
            })}
            data-clearable={clearable() || undefined}
            variant={local.variant}
          >
            <PasswordInputPrimitive.Input
              {...inputProps}
              asChild={(inputChildProps) => (
                <InputGroup.Input
                  {...inputChildProps()}
                  clearable={false}
                  disabled={local.disabled}
                  onChange={handleChange}
                  readOnly={local.readOnly}
                  ref={mergedRef}
                  value={local.value}
                />
              )}
            />
            <Show when={canClear()}>
              <InputGroup.Addon align="inline-end" class={slots().clearAddon()}>
                <InputGroup.Button
                  {...restClearButtonProps}
                  aria-label="Clear"
                  data-part="clear-trigger"
                  data-scope="password-input"
                  onClick={(event) => {
                    handleClear();
                    callEventHandler(clearLocal.onClick, event);
                  }}
                  size="icon-xs"
                  type="button"
                  variant="ghost"
                >
                  {clearLocal.children ?? <XIcon />}
                </InputGroup.Button>
              </InputGroup.Addon>
            </Show>
            <InputGroup.Addon align="inline-end">
              <PasswordInputPrimitive.VisibilityTrigger
                {...local.visibilityTriggerProps}
                asChild={(triggerProps) => (
                  <InputGroup.Button
                    {...triggerProps()}
                    aria-label="Toggle password visibility"
                    size="icon-xs"
                    variant="ghost"
                  >
                    <PasswordInputPrimitive.Indicator
                      {...restIndicatorProps}
                      fallback={indicatorLocal.fallback ?? <EyeSlashIcon />}
                    >
                      {indicatorLocal.children ?? <EyeIcon />}
                    </PasswordInputPrimitive.Indicator>
                  </InputGroup.Button>
                )}
              />
            </InputGroup.Addon>
          </InputGroup>
        )}
      />
    </PasswordInputPrimitive.Root>
  );
}
