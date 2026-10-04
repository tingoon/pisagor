import type { ImageCropperRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ImageCropperContextValue {
  slots: ImageCropperRecipe;
}

const ctx = createContext("ImageCropper")<ImageCropperContextValue>();
export const setImageCropperContext = ctx.setContext;
export const useImageCropper = ctx.getContext;
