<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./signature-pad.context";

  type Props = SignaturePadControlProps & {
    invalid?: boolean;
  };

  let { invalid, children, ...rest }: Props = $props();

  const part = withContext(
    () => ({
      ...rest,
      "data-invalid": invalid || undefined,
    }),
    { name: "Control" },
  );
</script>

<SignaturePadPrimitive.Control {...part.props}>
  {@render children?.()}
</SignaturePadPrimitive.Control>
