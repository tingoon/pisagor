<script lang="ts">
import { Pagination } from "@pisagor/svelte";

let page = $state(1);

</script>

<div class="flex flex-col gap-2">
      <Pagination
        count={50}
        onPageChange={(details) => page = details.page}
        page={page}
        pageSize={10}
      />
      <p class="text-center text-muted-foreground text-sm">
        Page {page} of 5
      </p>
    </div>
