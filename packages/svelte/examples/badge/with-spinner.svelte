<script lang="ts">
import { Badge, Spinner } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
      <Badge variant="destructive">
        <Spinner />
        Deleting
      </Badge>
      <Badge variant="outline">
        Generating <Spinner />
      </Badge>
    </div>
