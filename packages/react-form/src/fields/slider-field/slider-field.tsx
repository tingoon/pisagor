import { Slider, type SliderProps } from "@pisagor/react/slider";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type SliderControlProps = SetRequired<
  Omit<SliderProps, "invalid" | "label" | "name">,
  "onValueChange"
>;

export interface SliderFieldProps
  extends Omit<FieldPresentationProps, "orientation">,
    SliderControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function SliderField({
  className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  ...sliderProps
}: SliderFieldProps) {
  return (
    <FieldShell
      className={className}
      description={description}
      error={error}
      id={id}
      invalid={invalid}
      label={label}
      labelAccessory={labelAccessory}
      labelProps={labelProps}
    >
      <Slider
        {...sliderProps}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
