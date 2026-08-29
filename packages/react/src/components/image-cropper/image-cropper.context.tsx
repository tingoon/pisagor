import type { ImageCropperSlots } from "@pisagor/recipes/image-cropper";
import { createContext } from "../../internal/utils";

interface ImageCropperContextValue {
  slots: ImageCropperSlots;
}

export const { ImageCropperContext, useImageCropper } = createContext<ImageCropperContextValue>()({
  name: "ImageCropper",
});
