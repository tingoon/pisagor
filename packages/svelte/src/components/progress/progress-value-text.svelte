<script lang="ts">
  import {
    Progress as ProgressPrimitive,
    type ProgressValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./progress.context";

  let { children, ...rest }: ProgressValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<ProgressPrimitive.ValueText {...part.props} {children} />
