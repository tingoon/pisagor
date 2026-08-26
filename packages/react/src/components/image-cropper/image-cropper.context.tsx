import type { ImageCropperVariants } from "@pisagor/styles/ui/image-cropper";
import { createContext } from "../../utils";

interface ImageCropperContextValue {
  slots: ImageCropperVariants;
}

export const { ImageCropperContext, useImageCropper } = createContext<ImageCropperContextValue>()({
  name: "ImageCropper",
});
