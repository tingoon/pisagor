import { imageCropperRecipe } from "@pisagor/recipes";
import { ImageCropper } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandImageCropperRecipe = tv({
  extend: imageCropperRecipe,
  slots: {
    handle: "text-emerald-500",
    selection: "border-emerald-500",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ImageCropper recipe={brandImageCropperRecipe}>
      <ImageCropper.Image
        alt="Crop me"
        src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
      />
      <ImageCropper.Selection />
    </ImageCropper>
  );
}
