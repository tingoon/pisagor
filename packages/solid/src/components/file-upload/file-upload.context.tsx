import type { FileUploadItemRecipe, FileUploadRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface FileUploadContextValue {
  slots: FileUploadRecipe;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemRecipe;
}

export const { FileUploadContext, useFileUpload } =
  createContext("FileUpload")<FileUploadContextValue>();

export const { FileUploadItemContext, useFileUploadItem } =
  createContext("FileUploadItem")<FileUploadItemContextValue>();
