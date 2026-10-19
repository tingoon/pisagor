<script lang="ts">
  import { fileUploadRecipe } from "@pisagor/recipes";
  import { Button, FileUpload, Separator } from "@pisagor/svelte";
  import { tv } from "tailwind-variants";

  const brandFileUploadRecipe = tv({
    extend: fileUploadRecipe,
    slots: {
      dropzone:
        "border-emerald-500/40 bg-emerald-500/5 data-dragging:border-emerald-600 data-dragging:bg-emerald-500/10",
      dropzoneIcon: "text-emerald-600",
    },
    variants: {},
  });
</script>

<FileUpload
  recipe={brandFileUploadRecipe}
  helper="You can upload up to 2 files at a time."
  title="Drop files here"
>
  {#snippet description()}
    <div class="flex items-center justify-center gap-2">
      <Separator />
      or
      <Separator />
    </div>
  {/snippet}
  {#snippet trigger(props)}
    <Button {...props()}>Browse files</Button>
  {/snippet}
</FileUpload>
