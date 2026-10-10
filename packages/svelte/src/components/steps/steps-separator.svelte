<script lang="ts">
import {
  Steps as StepsPrimitive,
  type StepsSeparatorProps,
} from "@ark-ui/svelte/steps";
import { withStepsItemContext } from "./steps.context";

let { ...rest }: StepsSeparatorProps = $props();
const part = withStepsItemContext(() => rest, { name: "Separator" });
</script>

<StepsPrimitive.Separator {...part.props} />
