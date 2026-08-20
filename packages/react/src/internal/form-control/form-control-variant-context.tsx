import type { ReactNode } from "react";
import { createContext } from "../../utils/create-context";
import type { FormControlVariant } from "./form-control-variants";

export const { FormControlVariantContext, useFormControlVariant: useFormControlVariantContext } =
  createContext<FormControlVariant>()({
    name: "FormControlVariant",
    strict: false,
  });

export function FormControlVariantProvider({
  value,
  children,
}: {
  value: FormControlVariant | undefined;
  children: ReactNode;
}) {
  return <FormControlVariantContext value={value}>{children}</FormControlVariantContext>;
}
