import { fileUploadItemRecipe, fileUploadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: FileUploadStylesContext,
  useStyles: useFileUpload,
  withContext: withFileUploadContext,
  withProvider: withFileUploadProvider,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadRecipe,
});

export const {
  Context: FileUploadItemStylesContext,
  useStyles: useFileUploadItem,
  withContext: withFileUploadItemContext,
  withProvider: withFileUploadItemProvider,
} = createSlotRecipeContext({
  name: "FileUpload",
  recipe: fileUploadItemRecipe,
});
