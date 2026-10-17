import { Button, FileUpload, Separator } from "@pisagor/react";
import { fileUploadRecipe } from "@pisagor/recipes";
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

export function CustomRecipe() {
  return (
    <FileUpload recipe={brandFileUploadRecipe}>
      <FileUpload.Dropzone>
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Drop files here</FileUpload.Title>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <FileUpload.Description>or</FileUpload.Description>
          <Separator />
        </div>
        <FileUpload.Trigger asChild>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
        <FileUpload.Helper>
          You can upload up to 2 files at a time.
        </FileUpload.Helper>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload>
  );
}
