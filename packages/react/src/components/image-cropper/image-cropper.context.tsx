import type { ImageCropperVariants } from "@pisagor/recipes/image-cropper";
import { createContext } from "../../internal/utils";

interface ImageCropperContextValue {
  slots: ImageCropperVariants;
}

export const { ImageCropperContext, useImageCropper } = createContext<ImageCropperContextValue>()({
  name: "ImageCropper",
});
