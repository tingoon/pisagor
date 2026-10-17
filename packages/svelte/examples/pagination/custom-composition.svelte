<script module lang="ts">
  import source from "./custom-composition.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Pagination } from "@pisagor/svelte";
</script>

<Pagination count={50} pageSize={10}>
  <Pagination.PrevTrigger />
  <Pagination.Items />
  <Pagination.NextTrigger />
</Pagination>
