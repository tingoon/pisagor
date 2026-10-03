<script lang="ts">
import type { ComponentProps } from "svelte";
import TagsInputFieldControl from "../../../fields/tags-input-field/tags-input-field.svelte";
import { useFieldContext } from "../../contexts";
import { getFieldErrorMessage, useSubmissionAttempts } from "../../hooks";

type ControlProps = ComponentProps<typeof TagsInputFieldControl>;
type Props = Omit<
  ControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

let { ...rest }: Props = $props();

const field = useFieldContext<string[]>();
const submissionAttempts = useSubmissionAttempts();
const invalid = $derived(
  field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts.current > 0),
);
const error = $derived(invalid ? getFieldErrorMessage(field) : undefined);
</script>

<TagsInputFieldControl
  {...rest}
  {error}
  id={field.name}
  {invalid}
  name={field.name}
  onBlur={field.handleBlur}
  onValueChange={(v: string[]) => field.handleChange(v)}
  value={field.state.value}
/>
