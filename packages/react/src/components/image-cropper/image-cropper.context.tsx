import type { ImageCropperRecipe } from "@pisagor/recipes/image-cropper";
import { createContext } from "../../internal/utils";

interface ImageCropperContextValue {
  slots: ImageCropperRecipe;
}

export const { ImageCropperContext, useImageCropper } = createContext<ImageCropperContextValue>()({
  name: "ImageCropper",
});
