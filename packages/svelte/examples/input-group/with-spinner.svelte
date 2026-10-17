<script module lang="ts">
  import source from "./with-spinner.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputGroup, Spinner } from "@pisagor/svelte";
</script>

<InputGroup data-disabled>
  <InputGroup.Input disabled placeholder="Loading..." />
  <InputGroup.Addon align="inline-end">
    <Spinner aria-label="Loading" />
  </InputGroup.Addon>
</InputGroup>
