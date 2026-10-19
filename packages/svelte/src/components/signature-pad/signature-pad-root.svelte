<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadRootProps,
  } from "@ark-ui/svelte";
  import type { SignaturePadRootContract } from "@pisagor/contracts";

  import { withProvider } from "./signature-pad.context";

  type Props = SignaturePadRootProps &
    SignaturePadRootContract & {
      /** Marks the control as invalid for styling and assistive tech. */
      invalid?: boolean;
    };

  let { invalid = false, children, ...rest }: Props = $props();

  const root = withProvider(
    () => ({
      ...rest,
      "aria-invalid": invalid || undefined,
      "data-invalid": invalid || undefined,
    }),
    { name: "Root" },
  );
</script>

<SignaturePadPrimitive.Root {...root.props}>
  {@render children?.()}
</SignaturePadPrimitive.Root>
