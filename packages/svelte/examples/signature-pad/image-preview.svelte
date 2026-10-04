<script lang="ts">
import { Field } from "@pisagor/svelte";
import { SignaturePad } from "@pisagor/svelte/signature-pad";

let imageUrl = $state<string | null>(null);
</script>

<Field class="flex flex-col gap-2">
  <SignaturePad
    onDrawEnd={(details) =>
      details.getDataUrl("image/png").then((url) => (imageUrl = url))}
  />
  <Field.Description>Image preview</Field.Description>
  <div class="relative h-40 w-full rounded-lg border bg-muted">
    {#if imageUrl}
      <img
        alt="Your signature as captured from the pad above"
        class="absolute inset-0 size-full object-cover dark:invert"
        src={imageUrl}
      />
    {/if}
  </div>
</Field>
