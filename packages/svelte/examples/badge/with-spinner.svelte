<script lang="ts">
import { Spinner } from "@pisagor/svelte";
import { Badge } from "@pisagor/svelte/badge";
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
