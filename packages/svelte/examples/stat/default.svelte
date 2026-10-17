<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Stat } from "@pisagor/svelte";
</script>

<Stat
  description="vs last week"
  label="Revenue"
  trend="+12.5%"
  value="$45.2K"
/>
