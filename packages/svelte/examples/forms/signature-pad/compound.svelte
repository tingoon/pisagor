<script lang="ts">
  import { Button, SignaturePad } from "@pisagor/svelte";
  import { ArrowCounterClockwiseIcon } from "phosphor-svelte";
</script>

<SignaturePad.Root class="w-80">
  <SignaturePad.Control>
    <SignaturePad.Segment />
    <SignaturePad.ClearTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          aria-label="Clear signature"
          size="icon-md"
          variant="ghost"
        >
          <ArrowCounterClockwiseIcon />
        </Button>
      {/snippet}
    </SignaturePad.ClearTrigger>
    <SignaturePad.Guide />
  </SignaturePad.Control>
</SignaturePad.Root>
