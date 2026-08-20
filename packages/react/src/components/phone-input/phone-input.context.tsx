import type {
  PhoneInputSlots,
  PhoneInputVariantProps,
  PhoneInputVariants,
} from "@pisagor/styles/ui/phone-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { VariantClassNames } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";

type PhoneInputClassNames = VariantClassNames<PhoneInputSlots>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<InputProps, "className" | "onChange" | "onBlur" | "size" | "type" | "value">;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
  size: PhoneInputSize;
  slots: PhoneInputVariants;
  testId?: string;
  variant?: FormControlVariant;
}

export const { PhoneInputContext, usePhoneInput } = createContext<PhoneInputContextValue>()({
  name: "PhoneInput",
});
