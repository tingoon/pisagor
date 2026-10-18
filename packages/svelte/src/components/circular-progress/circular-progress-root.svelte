<script lang="ts">
  import {
    Progress as ProgressPrimitive,
    type ProgressRootProviderProps,
  } from "@ark-ui/svelte";
  import type { CircularProgressRootContract } from "@pisagor/props";
  import { withProvider } from "./circular-progress.context";

  type Props = ProgressRootProviderProps & CircularProgressRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ProgressPrimitive.RootProvider {...root.props}>
  {@render children?.()}
</ProgressPrimitive.RootProvider>
