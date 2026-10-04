<script lang="ts">
import { Skeleton } from "@pisagor/svelte/skeleton";
</script>

<div class="flex flex-col gap-5">
      <Skeleton class="h-6 w-3/4" />
      <Skeleton.Text lines={5} />
      <Skeleton.Text lines={3} />
      <Skeleton.Text lines={2} />
    </div>
