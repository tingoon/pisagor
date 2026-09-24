import FieldContent from "./field-content.svelte";
import FieldDescription from "./field-description.svelte";
import FieldError from "./field-error.svelte";
import FieldGroup from "./field-group.svelte";
import FieldHelper from "./field-helper.svelte";
import FieldLabel from "./field-label.svelte";
import FieldLegend from "./field-legend.svelte";
import FieldRequiredIndicator from "./field-required-indicator.svelte";
import FieldRoot from "./field-root.svelte";
import FieldSeparator from "./field-separator.svelte";
import FieldSet from "./field-set.svelte";
import FieldTitle from "./field-title.svelte";

export const Field = Object.assign(FieldRoot, {
  Content: FieldContent,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Helper: FieldHelper,
  Label: FieldLabel,
  Legend: FieldLegend,
  RequiredIndicator: FieldRequiredIndicator,
  Separator: FieldSeparator,
  Set: FieldSet,
  Title: FieldTitle,
});

export { useField, useFieldSlots } from "./field.context";
