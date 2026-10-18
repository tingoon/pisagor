import type { PhoneInputContract } from "@pisagor/props";
import type {
  PhoneInputRecipe,
  PhoneInputVariantProps,
} from "@pisagor/recipes";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import type { FormControlVariant } from "../../internal";
import { createContext } from "../../utils";

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputContract["classNames"];
  inputProps?: Omit<
    InputProps,
    "className" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
  size: PhoneInputSize;
  slots: PhoneInputRecipe;
  variant?: FormControlVariant;
}

export const { PhoneInputContext, usePhoneInput } =
  createContext("PhoneInput")<PhoneInputContextValue>();
