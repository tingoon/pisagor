<script module lang="ts">
  import source from "./image-preview.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, SignaturePad } from "@pisagor/svelte";

  let imageUrl = $state<string | null>(null);
</script>

<Field class="flex flex-col gap-2">
  <SignaturePad
    onDrawEnd={(details) =>
      details.getDataUrl("image/png").then((url) => (imageUrl = url))}
  />
  <Field.Description>Image preview</Field.Description>
  <div class="bg-muted relative h-40 w-full rounded-lg border">
    {#if imageUrl}
      <img
        alt="Your signature as captured from the pad above"
        class="absolute inset-0 size-full object-cover dark:invert"
        src={imageUrl}
      />
    {/if}
  </div>
</Field>
