<script module lang="ts">
  import source from "./page-range.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Pagination } from "@pisagor/svelte";
</script>

<Pagination count={100} page={6} pageSize={10} />
