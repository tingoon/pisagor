<script lang="ts">
import {
  type RatingGroupItemProps,
  RatingGroup as RatingGroupPrimitive,
} from "@ark-ui/svelte/rating-group";
import { withContext } from "./rating.context";

let { children, ...rest }: RatingGroupItemProps = $props();
const part = withContext(() => rest, { name: "Item" });
</script>

<RatingGroupPrimitive.Item {...part.props}>
  {@render children?.()}
</RatingGroupPrimitive.Item>
