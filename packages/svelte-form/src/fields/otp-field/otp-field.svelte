<script lang="ts">
import { InputOTP } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type InputOTPProps = ComponentProps<typeof InputOTP>;

type Props = Omit<
  InputOTPProps,
  "children" | "invalid" | "onValueChange" | "value" | "name" | "onBlur"
> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  /**
   * Number of OTP digits.
   * @defaultValue 6
   */
  length?: number | undefined;
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
  value?: string | undefined;
};

let {
  class: className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  length = 6,
  name,
  onBlur,
  onValueChange,
  orientation,
  value,
  ...inputOtpProps
}: Props = $props();

const separatorAt = $derived(length > 1 ? Math.floor(length / 2) : -1);
const indices = $derived(Array.from({ length }, (_, index) => index));
const otpValue = $derived(
  value !== undefined ? (value ? value.split("") : []) : undefined,
);

function handleValueChange(nextValue: string[]) {
  onValueChange?.(nextValue.join(""));
}
</script>

<FieldShell
  class={className}
  {description}
  {error}
  {id}
  {invalid}
  {label}
  {labelAccessory}
  {labelProps}
  {orientation}
>
  <InputOTP
    {...inputOtpProps}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    onValueChange={handleValueChange}
    value={otpValue}
  >
    {#each indices as index (index)}
      {#if index === separatorAt}
        <InputOTP.Separator />
      {/if}
      <InputOTP.Slot {index} />
    {/each}
  </InputOTP>
</FieldShell>
