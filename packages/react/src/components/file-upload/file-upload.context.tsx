import type { FileUploadItemRecipe, FileUploadRecipe } from "@pisagor/recipes/file-upload";
import { createContext } from "../../internal/utils";

interface FileUploadContextValue {
  slots: FileUploadRecipe;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemRecipe;
}

export const { FileUploadContext, useFileUpload } = createContext<FileUploadContextValue>()({
  name: "FileUpload",
});

export const { FileUploadItemContext, useFileUploadItem } =
  createContext<FileUploadItemContextValue>()({
    name: "FileUploadItem",
  });
