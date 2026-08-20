import type { PhoneInputVariantProps, phoneInputVariants } from "@pisagor/styles/ui/phone-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { VariantClassNames } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";

type PhoneInputClassNames = VariantClassNames<typeof phoneInputVariants>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<InputProps, "className" | "onChange" | "onBlur" | "size" | "type" | "value">;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
  size: PhoneInputSize;
  slots: ReturnType<typeof phoneInputVariants>;
  testId?: string;
  variant?: FormControlVariant;
}

const [PhoneInputContextProvider, usePhoneInputContext] = createContext<PhoneInputContextValue>({
  name: "PhoneInput",
});

export { PhoneInputContextProvider, usePhoneInputContext };
