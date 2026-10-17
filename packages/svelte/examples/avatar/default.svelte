<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Avatar } from "@pisagor/svelte";
</script>

<Avatar
  alt="Jane Doe"
  fallback="JD"
  src="https://randomuser.me/api/portraits/women/5.jpg"
/>
