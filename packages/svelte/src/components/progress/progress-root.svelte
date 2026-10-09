<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressRootProps,
} from "@ark-ui/svelte/progress";
import type { ProgressProps as BaseProgressProps } from "@pisagor/props";
import { withProvider } from "./progress.context";

type Props = ProgressRootProps & BaseProgressProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ProgressPrimitive.Root {...root.props}>
  {@render children?.()}
</ProgressPrimitive.Root>
