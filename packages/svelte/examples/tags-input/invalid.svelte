<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TagsInput } from "@pisagor/svelte";
</script>

<TagsInput class="w-full" defaultValue={["React"]} invalid />
