<script lang="ts">
import { Button } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import { useFormContext } from "../contexts";

type ButtonProps = ComponentProps<typeof Button>;

type Props = Omit<ButtonProps, "type" | "children"> & {
  children?: Snippet;
};

let { loading, children, ...buttonProps }: Props = $props();
const form = useFormContext();
</script>

<form.Subscribe selector={(state) => state.isSubmitting}>
  {#snippet children(
    isSubmitting,
  )}
    <Button {...buttonProps} loading={loading ?? isSubmitting} type="submit">
      {@render children?.()}
    </Button>
  {/snippet}
</form.Subscribe>
