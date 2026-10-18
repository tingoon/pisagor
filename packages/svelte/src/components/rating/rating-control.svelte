<script lang="ts">
  import {
    RatingGroup as RatingGroupPrimitive,
    type RatingGroupControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./rating.context";

  let { children, ...rest }: RatingGroupControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<RatingGroupPrimitive.Control {...part.props}>
  {@render children?.()}
</RatingGroupPrimitive.Control>
