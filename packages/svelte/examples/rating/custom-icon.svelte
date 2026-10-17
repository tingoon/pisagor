<script module lang="ts">
  import source from "./custom-icon.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Rating } from "@pisagor/svelte";
  import HeartIcon from "phosphor-svelte/lib/HeartIcon";
</script>

<Rating allowHalf class="text-destructive" icon={HeartIcon} />
