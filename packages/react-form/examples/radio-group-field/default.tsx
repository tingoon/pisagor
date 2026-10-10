import { RadioGroupField } from "@pisagor/react-form";
import { planOptions } from "../options";

export function Default() {
  return (
    <RadioGroupField
      defaultValue="starter"
      description="You can upgrade or downgrade at any time."
      id="radio-group-field-subscription"
      label="Subscription"
      options={planOptions}
    />
  );
}
