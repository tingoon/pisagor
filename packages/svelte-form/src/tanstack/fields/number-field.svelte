<script lang="ts">
import type { ComponentProps } from "svelte";
import NumberFieldControl from "../../fields/number-field.svelte";
import { useFieldContext } from "../contexts";
import { getFieldErrorMessage, useSubmissionAttempts } from "../hooks";

type ControlProps = ComponentProps<typeof NumberFieldControl>;
type Props = Omit<
  ControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

let { ...rest }: Props = $props();

const field = useFieldContext<number>();
const submissionAttempts = useSubmissionAttempts();
const invalid = $derived(
  field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts.current > 0),
);
const error = $derived(invalid ? getFieldErrorMessage(field) : undefined);
</script>

<NumberFieldControl
  {...rest}
  {error}
  id={field.name}
  {invalid}
  name={field.name}
  onBlur={field.handleBlur}
  onValueChange={(v: number) => field.handleChange(v)}
  value={field.state.value}
/>
