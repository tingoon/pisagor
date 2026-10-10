import { Slider, type SliderProps } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
type SliderControlProps = Omit<SliderProps, "invalid" | "label" | "name">;

export interface SliderFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    SliderControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function SliderField(props: SliderFieldProps) {
  const [local, sliderProps] = splitProps(props, [
    "invalid",
    "name",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
    >
      <Slider
        {...sliderProps}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={local.onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
