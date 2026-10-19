<script lang="ts">
  import type { ComponentProps } from "svelte";
  import InputGroupText from "../input-group/input-group-text.svelte";
  import { withContext } from "./file-input.context";

  let { ...rest }: ComponentProps<typeof InputGroupText> = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<InputGroupText {...part.props} />
