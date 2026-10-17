<script module lang="ts">
  import source from "./with-label.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Progress } from "@pisagor/svelte";
</script>

<Progress isValueVisible label="Upload progress" value={66} />
