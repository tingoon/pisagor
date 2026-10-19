<script lang="ts">
  import {
    Progress as ProgressPrimitive,
    type ProgressRootProps,
  } from "@ark-ui/svelte";
  import type { ProgressRootContract } from "@pisagor/contracts";
  import { withProvider } from "./progress.context";

  type Props = ProgressRootProps & ProgressRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ProgressPrimitive.Root {...root.props}>
  {@render children?.()}
</ProgressPrimitive.Root>
