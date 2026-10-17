<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { TagsInput } from "@pisagor/svelte";
</script>

<TagsInput class="w-full" defaultValue={["React", "Solid", "Vue"]} disabled />
