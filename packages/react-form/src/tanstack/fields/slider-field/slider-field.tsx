import {
  SliderField as SliderFieldControl,
  type SliderFieldProps,
} from "../../../fields/slider-field/slider-field";
import { createFieldComponent } from "../../create-field-component";

type SliderFieldControlProps = SliderFieldProps;
type ConnectedSliderFieldProps = Pick<
  SliderFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const SliderField = createFieldComponent<
  number[],
  SliderFieldControlProps,
  ConnectedSliderFieldProps
>(SliderFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: number[]) => field.handleChange(value),
  value: field.state.value,
}));
