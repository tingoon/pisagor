<script lang="ts">
  import {
    RatingGroup as RatingGroupPrimitive,
    type RatingGroupItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./rating.context";

  let { children, ...rest }: RatingGroupItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<RatingGroupPrimitive.Item {...part.props}>
  {@render children?.()}
</RatingGroupPrimitive.Item>
