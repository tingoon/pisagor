<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Listbox } from "@pisagor/svelte";
</script>

<Listbox
  items={[
    { label: "React", value: "react" },
    { label: "Svelte", value: "svelte" },
    { label: "Vue", value: "vue" },
  ]}
/>
