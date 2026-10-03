<script lang="ts">
import { Timeline } from "@pisagor/svelte/timeline";
</script>

<Timeline
      items={[
        { title: "Planned" },
        { title: "In progress" },
        { title: "Shipped" },
      ]}
      orientation="horizontal"
    />
