import type { PhoneInputSlots, PhoneInputVariantProps } from "@pisagor/recipes/phone-input";
import type { VariantClassNames } from "../../internal/types";
import { createContext } from "../../internal/utils";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";

type FormControlVariant = "primary" | "secondary";

type PhoneInputClassNames = VariantClassNames<PhoneInputSlots>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<InputProps, "className" | "onChange" | "onBlur" | "size" | "type" | "value">;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
  size: PhoneInputSize;
  slots: PhoneInputSlots;
  variant?: FormControlVariant;
}

export const { PhoneInputContext, usePhoneInput } = createContext<PhoneInputContextValue>()({
  name: "PhoneInput",
});
