import { Switch as SwitchPrimitive } from "@ark-ui/react";
import type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchRootProps as SwitchRootPrimitiveProps,
  SwitchThumbProps,
} from "@ark-ui/react";
import type { SwitchContract, SwitchRootContract } from "@pisagor/contracts";
import { switchRecipe } from "@pisagor/recipes";
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
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "className">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "className">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "className">;
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

function HiddenInput(props: SwitchHiddenInputProps) {
  return <SwitchPrimitive.HiddenInput {...props} />;
}
// #endregion

// #region Closed
function SwitchShorthand({
  controlProps,
  hiddenInputProps,
  thumbProps,
  className,
  classNames,
  ...rest
}: SwitchProps) {
  return (
    <Root {...rest} className={className}>
      <Control {...controlProps} className={classNames?.control}>
        <Thumb {...thumbProps} className={classNames?.thumb} />
      </Control>

      <HiddenInput {...hiddenInputProps} />
    </Root>
  );
}
// #endregion

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/react";

export const Switch = Object.assign(SwitchShorthand, {
  Control,
  HiddenInput,
  Root,
  Thumb,
});
