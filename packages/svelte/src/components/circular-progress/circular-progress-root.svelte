<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressRootProviderProps,
} from "@ark-ui/svelte/progress";
import type { CircularProgressProps as BaseCircularProgressProps } from "@pisagor/props";
import { withProvider } from "./circular-progress.context";

type Props = ProgressRootProviderProps & BaseCircularProgressProps;

let { children, ...rest }: Props = $props();
const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ProgressPrimitive.RootProvider {...root.props}>
  {@render children?.()}
</ProgressPrimitive.RootProvider>
