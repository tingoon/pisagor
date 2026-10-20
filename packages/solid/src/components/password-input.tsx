import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/solid";
import type {
  PasswordInputControlProps,
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputLabelProps,
  PasswordInputRootProps as PasswordInputRootPrimitiveProps,
  PasswordInputVisibilityTriggerProps as PasswordInputVisibilityTriggerPrimitiveProps,
} from "@ark-ui/solid";
import type {
  PasswordInputContract,
  PasswordInputRootContract,
} from "@pisagor/contracts";
import { passwordInputRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useClearableInput } from "../hooks";
import {
  EyeIcon,
  EyeSlashIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { callEventHandler } from "../utils";
import { InputGroup, type InputGroupButtonProps } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "PasswordInput",
  recipe: passwordInputRecipe,
});
// #endregion

// #region Types
export type PasswordInputRootProps = PasswordInputRootPrimitiveProps & {
  /** Style recipe override. */
  recipe?: PasswordInputRootContract["recipe"];
};

type PasswordInputShorthandRootProps = Pick<
  PasswordInputRootPrimitiveProps,
  "class" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps =
  PasswordInputVisibilityTriggerPrimitiveProps;

export type {
  PasswordInputControlProps,
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputLabelProps,
};

export interface PasswordInputProps
  extends
    PasswordInputShorthandRootProps,
    Omit<PasswordInputInputProps, "class" | "size">,
    PasswordInputRootContract,
    PasswordInputContract {
  defaultValue?: string | number | readonly string[];
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @remarks
   *   In controlled mode, pass `value` and update it via `onInput` or
   *   `onValueChange` when clearing.
   * @defaultValue false
   */
  clearable?: boolean;
  /** Called with the string value when the input changes. */
  onValueChange?: (value: string) => void;
  clearButtonProps?: InputGroupButtonProps;
  indicatorProps?: PasswordInputIndicatorProps;
  visibilityTriggerProps?: Omit<PasswordInputVisibilityTriggerProps, "asChild">;
}
// #endregion

// #region Parts
const Root = withProvider<PasswordInputRootProps>(PasswordInputPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Label = withContext<PasswordInputLabelProps>(
  PasswordInputPrimitive.Label,
  { name: "Label" },
);

const Control = withContext<PasswordInputControlProps>(
  PasswordInputPrimitive.Control,
  { name: "Control" },
);

const Input = withContext<PasswordInputInputProps>(
  PasswordInputPrimitive.Input,
  { name: "Input" },
);

const VisibilityTriggerBase = withContext<PasswordInputVisibilityTriggerProps>(
  PasswordInputPrimitive.VisibilityTrigger,
  { name: "VisibilityTrigger" },
);

/** Visibility trigger with a localized default `aria-label`. */
function VisibilityTrigger(
  props: PasswordInputVisibilityTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <VisibilityTriggerBase
      aria-label={m("passwordInput.togglePasswordVisibility")}
      {...props}
    />
  );
}

const Indicator = withContext<PasswordInputIndicatorProps>(
  PasswordInputPrimitive.Indicator,
  { name: "Indicator" },
);
// #endregion

// #region Shorthand
export function PasswordInputShorthand(props: PasswordInputProps): JSX.Element {
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
    "classNames",
    // InputGroup reads the surface from context; keep it off the DOM input.
    "surfaceVariant",
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
    <Root
      class={local.class}
      data-size={size()}
      defaultVisible={local.defaultVisible}
      invalid={local.invalid}
      onVisibilityChange={local.onVisibilityChange}
      recipe={local.recipe}
      visible={local.visible}
    >
      <Control
        asChild={(controlProps) => (
          <InputGroup
            {...controlProps()}
            data-clearable={clearable() || undefined}
            size={size()}
            variant={local.variant}
          >
            <Input
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
              class={local.classNames?.input}
            />
            <Show when={canClear()}>
              <InputGroup.Addon
                align="inline-end"
                class={slots().clearAddon({
                  class: local.classNames?.clearAddon,
                })}
              >
                <InputGroup.Button
                  {...restClearButtonProps}
                  aria-label={m("passwordInput.clear")}
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
              <VisibilityTrigger
                {...local.visibilityTriggerProps}
                asChild={(triggerProps) => (
                  <InputGroup.Button
                    {...triggerProps()}
                    size="icon-xs"
                    variant="ghost"
                  >
                    <Indicator
                      {...restIndicatorProps}
                      class={local.classNames?.indicator}
                      fallback={indicatorLocal.fallback ?? <EyeSlashIcon />}
                    >
                      {indicatorLocal.children ?? <EyeIcon />}
                    </Indicator>
                  </InputGroup.Button>
                )}
                class={local.classNames?.visibilityTrigger}
              />
            </InputGroup.Addon>
          </InputGroup>
        )}
        class={local.classNames?.control}
      />
    </Root>
  );
}
// #endregion

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control,
  Indicator,
  Input,
  Label,
  Root,
  VisibilityTrigger,
});
