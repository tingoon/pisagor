import type { ImageCropperRecipe } from "@pisagor/recipes/image-cropper";
import { createContext } from "../../utils/create-context";

interface ImageCropperContextValue {
  slots: ImageCropperRecipe;
}

const ctx = createContext<ImageCropperContextValue>({ name: "ImageCropper" });
export const setImageCropperContext = ctx.setContext;
export const useImageCropper = ctx.getContext;
