<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button } from "@pisagor/svelte";
  import PaperPlaneTiltIcon from "phosphor-svelte/lib/PaperPlaneTiltIcon";
</script>

<Button disabled>Send <PaperPlaneTiltIcon /></Button>
