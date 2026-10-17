<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { File } from "@pisagor/svelte";
</script>

<File name="report.pdf" size={1024 * 240} />
