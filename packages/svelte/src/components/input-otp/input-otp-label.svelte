<script lang="ts">
  import {
    PinInput as PinInputPrimitive,
    type PinInputLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./input-otp.context";

  let { children, ...rest }: PinInputLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<PinInputPrimitive.Label {...part.props}>
  {@render children?.()}
</PinInputPrimitive.Label>
