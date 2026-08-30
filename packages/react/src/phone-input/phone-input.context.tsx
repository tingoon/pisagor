import type {
  PhoneInputRecipe,
  PhoneInputRecipeSlot,
  PhoneInputVariantProps,
} from "@pisagor/recipes/phone-input";
import type { ComboboxContentProps } from "../components/combobox";
import type { InputProps } from "../components/input";
import type { VariantClassNames } from "../internal/types";
import { createContext } from "../utils";

type FormControlVariant = "primary" | "secondary";

type PhoneInputClassNames = VariantClassNames<PhoneInputRecipeSlot>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<InputProps, "className" | "onChange" | "onBlur" | "size" | "type" | "value">;
  invalid?: boolean;
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
  size: PhoneInputSize;
  slots: PhoneInputRecipe;
  variant?: FormControlVariant;
}

export const { PhoneInputContext, usePhoneInput } = createContext<PhoneInputContextValue>()({
  name: "PhoneInput",
});
