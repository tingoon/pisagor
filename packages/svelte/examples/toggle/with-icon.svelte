<script module lang="ts">
  import source from "./with-icon.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Toggle } from "@pisagor/svelte";
  import TextBIcon from "phosphor-svelte/lib/TextBIcon";
</script>

<Toggle aria-label="Toggle bold" variant="outline">
  <TextBIcon />
</Toggle>
