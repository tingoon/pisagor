<script lang="ts">
import {
  type RatingGroupControlProps,
  RatingGroup as RatingGroupPrimitive,
} from "@ark-ui/svelte/rating-group";
import { withContext } from "./rating.context";

let { children, ...rest }: RatingGroupControlProps = $props();
const part = withContext(() => rest, { name: "Control" });
</script>

<RatingGroupPrimitive.Control {...part.props}>
  {@render children?.()}
</RatingGroupPrimitive.Control>
