<script lang="ts">
  import {
    RatingGroup as RatingGroupPrimitive,
    type RatingGroupRootProps,
  } from "@ark-ui/svelte";
  import type { RatingRootContract } from "@pisagor/contracts";

  import { withProvider } from "./rating.context";

  type Props = RatingGroupRootProps & RatingRootContract;

  let { allowHalf = false, count = 5, children, ...rest }: Props = $props();

  const root = withProvider(() => ({ ...rest, allowHalf, count }), {
    name: "Root",
  });
</script>

<RatingGroupPrimitive.Root {...root.props}>
  {@render children?.()}
</RatingGroupPrimitive.Root>
