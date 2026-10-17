<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Checkbox } from "@pisagor/svelte";
</script>

<Checkbox.Root defaultChecked>
  <Checkbox.Control />
  <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
  <Checkbox.HiddenInput />
</Checkbox.Root>
