import type { ReactNode } from "react";
import { createContext } from "../../utils/create-context";
import type { FormControlVariant } from "./form-control-variants";

const [FormControlVariantContext, useFormControlVariantContext] = createContext<FormControlVariant>(
  {
    name: "FormControlVariant",
    strict: false,
  },
);

export { useFormControlVariantContext };

export function FormControlVariantProvider({
  value,
  children,
}: {
  value: FormControlVariant | undefined;
  children: ReactNode;
}) {
  return <FormControlVariantContext value={value}>{children}</FormControlVariantContext>;
}
