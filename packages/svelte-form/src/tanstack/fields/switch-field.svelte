<script lang="ts">
import type { ComponentProps } from "svelte";
import SwitchFieldControl from "../../fields/switch-field.svelte";
import { useFieldContext } from "../contexts";
import { getFieldErrorMessage, useSubmissionAttempts } from "../hooks";

type ControlProps = ComponentProps<typeof SwitchFieldControl>;
type Props = Omit<
  ControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "checked"
>;

let { ...rest }: Props = $props();

const field = useFieldContext<boolean>();
const submissionAttempts = useSubmissionAttempts();
const invalid = $derived(
  field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts.current > 0),
);
const error = $derived(invalid ? getFieldErrorMessage(field) : undefined);
</script>

<SwitchFieldControl
  {...rest}
  checked={field.state.value}
  {error}
  id={field.name}
  {invalid}
  name={field.name}
  onBlur={field.handleBlur}
  onValueChange={(v: boolean) => field.handleChange(v)}
/>
