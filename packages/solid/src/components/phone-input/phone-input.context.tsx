import type {
  PhoneInputRecipe,
  PhoneInputRecipeSlot,
  PhoneInputVariantProps,
} from "@pisagor/recipes";
import type { ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import type { VariantClassNames } from "../../internal";
import { createContext } from "../../utils";

type FormControlVariant = "primary" | "secondary";

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: VariantClassNames<PhoneInputRecipeSlot>;
  inputProps?: Omit<
    InputProps,
    "class" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "class" | "children">;
  size: PhoneInputSize;
  slots: PhoneInputRecipe;
  variant?: FormControlVariant;
}

export const { PhoneInputContext, usePhoneInput } =
  createContext("PhoneInput")<PhoneInputContextValue>();
