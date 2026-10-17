<script module lang="ts">
  import source from "./compound.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SignaturePad } from "@pisagor/svelte";
</script>

<SignaturePad.Root class="w-80">
  <SignaturePad.Control>
    <SignaturePad.Segment />
    <SignaturePad.Clear />
    <SignaturePad.Guide />
  </SignaturePad.Control>
</SignaturePad.Root>
