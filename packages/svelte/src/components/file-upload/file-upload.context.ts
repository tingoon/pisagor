import type { FileUploadItemRecipe, FileUploadRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface FileUploadContextValue {
  slots: FileUploadRecipe;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemRecipe;
}

const root = createContext("FileUpload")<FileUploadContextValue>();
const item = createContext("FileUploadItem")<FileUploadItemContextValue>();

export const setFileUploadContext = root.setContext;
export const useFileUpload = root.getContext;
export const setFileUploadItemContext = item.setContext;
export const useFileUploadItem = item.getContext;
