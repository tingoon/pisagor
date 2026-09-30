import { DateField } from "../../../../../src/fields/date-field";

export function Disabled() {
  return (
    <DateField
      description="Pick your preferred project kickoff date."
      disabled
      id="date-field-start-date-disabled"
      label="Start date"
      placeholder="Select a date"
    />
  );
}
