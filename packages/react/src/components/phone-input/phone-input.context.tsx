import type {
  PhoneInputRecipe,
  PhoneInputRecipeSlot,
  PhoneInputVariantProps,
} from "@pisagor/recipes";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import type {
  FormControlVariant,
  VariantClassNames,
} from "../../internal/types";
import { createContext } from "../../utils";

type PhoneInputClassNames = VariantClassNames<PhoneInputRecipeSlot>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
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
