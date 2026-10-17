<script module lang="ts">
  import source from "./readonly.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Rating } from "@pisagor/svelte";
</script>

<Rating defaultValue={3} readOnly />
