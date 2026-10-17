<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Pagination } from "@pisagor/svelte";
</script>

<Pagination count={100} pageSize={10} />
