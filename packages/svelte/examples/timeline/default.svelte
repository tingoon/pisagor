<script lang="ts">
import { Timeline } from "@pisagor/svelte";
</script>

<Timeline
  items={[
    { description: "We received your order", title: "Ordered" },
    { description: "On the way", title: "Shipped" },
    { description: "Enjoy!", title: "Delivered" },
  ]}
/>
