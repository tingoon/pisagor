import type { ImageCropperRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface ImageCropperContextValue {
  slots: ImageCropperRecipe;
}

export const { ImageCropperContext, useImageCropper } =
  createContext("ImageCropper")<ImageCropperContextValue>();
