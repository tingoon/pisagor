<script lang="ts">
import { Pagination } from "@pisagor/svelte/pagination";
</script>

<Pagination count={50} pageSize={10}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination>
