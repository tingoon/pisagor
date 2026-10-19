<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./input-otp.context";

  let { ...rest }: HTMLAttributes<HTMLHRElement> = $props();
  const part = withContext(() => rest, { name: "Separator" });
</script>

<hr {...part.props} />
