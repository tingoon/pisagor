import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/solid";
import type {
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputRootProps as PasswordInputRootPrimitiveProps,
  PasswordInputVisibilityTriggerProps as PasswordInputVisibilityTriggerPrimitiveProps,
} from "@ark-ui/solid";
import type { PasswordInputProps as BasePasswordInputProps } from "@pisagor/props";
import { passwordInputRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../hooks";
import { EyeIcon, EyeSlashIcon, XIcon } from "../internal";
import { callEventHandler } from "../utils";
import {
  InputGroup,
  type InputGroupButtonProps,
  type InputGroupProps,
} from "./input-group";
import { useLocale } from "./provider/context";

export type PasswordInputRootProps = Pick<
  PasswordInputRootPrimitiveProps,
  "class" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps = Omit<
  PasswordInputVisibilityTriggerPrimitiveProps,
  "asChild"
>;

export interface PasswordInputProps
  extends
    PasswordInputRootProps,
    Omit<PasswordInputInputProps, "class" | "size">,
    BasePasswordInputProps {
  defaultValue?: string | number | readonly string[];
  clearable?: boolean;
  onValueChange?: (value: string) => void;
  clearButtonProps?: InputGroupButtonProps;
  indicatorProps?: PasswordInputIndicatorProps;
  visibilityTriggerProps?: PasswordInputVisibilityTriggerProps;
}

function PasswordInputRoot(
  props: PasswordInputRootPrimitiveProps & {
    recipe?: typeof passwordInputRecipe;
  },
): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);

  return (
    <PasswordInputPrimitive.Root
      {...rest}
      class={(local.recipe ?? passwordInputRecipe)().base({
        class: local.class,
      })}
    />
  );
}

function PasswordInputControl(props: InputGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <PasswordInputPrimitive.Control
      asChild={(controlProps) => (
        <InputGroup
          {...controlProps(rest)}
          class={passwordInputRecipe().control({ class: local.class })}
        />
      )}
    />
  );
}

function PasswordInputInput(props: PasswordInputInputProps): JSX.Element {
  return (
    <PasswordInputPrimitive.Input
      {...props}
      asChild={(inputProps) => (
        <InputGroup.Input {...inputProps()} clearable={false} />
      )}
    />
  );
}

function PasswordInputVisibilityTrigger(
  props: PasswordInputVisibilityTriggerProps,
): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <InputGroup.Addon align="inline-end">
      <PasswordInputPrimitive.VisibilityTrigger
        {...rest}
        asChild={(triggerProps) => (
          <InputGroup.Button
            aria-label={m("passwordInput.togglePasswordVisibility")}
            {...triggerProps()}
            size="icon-xs"
            variant="ghost"
          >
            {local.children ?? (
              <PasswordInputPrimitive.Indicator fallback={<EyeSlashIcon />}>
                <EyeIcon />
              </PasswordInputPrimitive.Indicator>
            )}
          </InputGroup.Button>
        )}
      />
    </InputGroup.Addon>
  );
}

function PasswordInputShorthand(props: PasswordInputProps): JSX.Element {
  const { m } = useLocale();
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

  const [indicatorLocal, restIndicatorProps] = splitProps(
    local.indicatorProps ?? {},
    ["fallback", "children"],
  );
  const [clearLocal, restClearButtonProps] = splitProps(
    local.clearButtonProps ?? {},
    ["onClick", "children"],
  );

  const { canClear, handleChange, handleClear, mergedRef } =
    useClearableInput<HTMLInputElement>({
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
        return (
          event: Event & {
            currentTarget: HTMLInputElement;
            target: HTMLInputElement;
          },
        ) => callEventHandler(local.onChange, event);
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
      class={slots().base({ class: local.class })}
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
            size={size()}
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
                  aria-label={m("passwordInput.clear")}
                  {...restClearButtonProps}
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
                    aria-label={m("passwordInput.togglePasswordVisibility")}
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

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control: PasswordInputControl,
  Indicator: PasswordInputPrimitive.Indicator,
  Input: PasswordInputInput,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});

export type { PasswordInputIndicatorProps } from "@ark-ui/solid";
