<script lang="ts">
  import {
    PinInput as PinInputPrimitive,
    type PinInputControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./input-otp.context";

  let { children, ...rest }: PinInputControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<PinInputPrimitive.Control {...part.props}>
  {@render children?.()}
</PinInputPrimitive.Control>
