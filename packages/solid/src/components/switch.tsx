import { Switch as SwitchPrimitive } from "@ark-ui/solid";
import type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchRootProps as SwitchRootPrimitiveProps,
  SwitchThumbProps,
} from "@ark-ui/solid";
import type { SwitchContract, SwitchRootContract } from "@pisagor/contracts";
import { switchRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

// #region Types
type SwitchRootProps = SwitchRootPrimitiveProps & SwitchRootContract;

export interface SwitchProps
  extends Omit<SwitchRootProps, "children">, SwitchContract {
  onValueChange?: (value: boolean) => void;
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "class">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "class">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "class">;
}
// #endregion

// #region Parts
const Root = withProvider<SwitchRootProps>(SwitchPrimitive.Root, {
  name: "Root",
});

const Control = withContext<SwitchControlProps>(SwitchPrimitive.Control, {
  name: "Control",
});

const Thumb = withContext<SwitchThumbProps>(SwitchPrimitive.Thumb, {
  name: "Thumb",
});

function HiddenInput(props: SwitchHiddenInputProps): JSX.Element {
  return <SwitchPrimitive.HiddenInput {...props} />;
}
// #endregion

// #region Closed
function SwitchShorthand(props: SwitchProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "controlProps",
    "hiddenInputProps",
    "thumbProps",
    "onCheckedChange",
    "onValueChange",
    "class",
    "classNames",
  ]);

  return (
    <Root
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
    >
      <Control {...local.controlProps} class={local.classNames?.control}>
        <Thumb {...local.thumbProps} class={local.classNames?.thumb} />
      </Control>
      <HiddenInput {...local.hiddenInputProps} />
    </Root>
  );
}
// #endregion

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/solid";

export const Switch = Object.assign(SwitchShorthand, {
  Control,
  HiddenInput,
  Root,
  Thumb,
});
