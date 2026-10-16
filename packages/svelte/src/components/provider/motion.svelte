<script lang="ts">
  import type { Snippet } from "svelte";
  import { setMotionConfig } from "./context";

  /** Override only motion settings for a subtree. */
  let { children, disabled }: { children?: Snippet; disabled?: boolean } =
    $props();

  const config = setMotionConfig({ disabled });
</script>

<div
  data-motion={config.disabled ? "disabled" : "enabled"}
  data-part="motion"
  data-scope="provider"
  style="display: contents"
>
  {@render children?.()}
</div>
