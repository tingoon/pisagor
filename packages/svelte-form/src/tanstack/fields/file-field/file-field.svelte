<script lang="ts">
import type { ComponentProps } from "svelte";
import FileFieldControl from "../../../fields/file-field/file-field.svelte";
import { useFieldContext } from "../../contexts";
import { getFieldErrorMessage, useSubmissionAttempts } from "../../hooks";

type ControlProps = ComponentProps<typeof FileFieldControl>;
type Props = Omit<
  ControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange"
>;

let { ...rest }: Props = $props();

const field = useFieldContext<File[]>();
const submissionAttempts = useSubmissionAttempts();
const invalid = $derived(
  field.state.meta.errors.length > 0 &&
    (field.state.meta.isTouched || submissionAttempts.current > 0),
);
const error = $derived(invalid ? getFieldErrorMessage(field) : undefined);
</script>

<FileFieldControl
  {...rest}
  {error}
  id={field.name}
  {invalid}
  name={field.name}
  onBlur={field.handleBlur}
  onValueChange={(v: File[]) => field.handleChange(v)}
/>
