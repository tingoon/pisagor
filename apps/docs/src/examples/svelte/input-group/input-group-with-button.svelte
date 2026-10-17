<script module lang="ts">
  import source from "./input-group-with-button.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { InputGroup } from "@pisagor/svelte";
</script>

<InputGroup>
  <InputGroup.Input placeholder="Your email" type="email" />
  <InputGroup.Addon align="inline-end">
    <InputGroup.Button size="xs" variant="ghost">Subscribe</InputGroup.Button>
  </InputGroup.Addon>
</InputGroup>
