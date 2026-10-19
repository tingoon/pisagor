<script lang="ts">
  import type { ComponentProps } from "svelte";
  import Separator from "../separator.svelte";
  import { withContext } from "./select.context";

  let { ...rest }: ComponentProps<typeof Separator> = $props();
  const part = withContext(() => rest, {
    defaultProps: { "data-scope": "select" },
    name: "Separator",
  });
</script>

<Separator {...part.props} />
