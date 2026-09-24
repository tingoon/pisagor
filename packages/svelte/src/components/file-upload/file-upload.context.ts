import type { FileUploadItemRecipe, FileUploadRecipe } from "@pisagor/recipes/file-upload";
import { createContext } from "../../utils/create-context";

interface FileUploadContextValue {
  slots: FileUploadRecipe;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemRecipe;
}

const root = createContext<FileUploadContextValue>({ name: "FileUpload" });
const item = createContext<FileUploadItemContextValue>({ name: "FileUploadItem" });

export const setFileUploadContext = root.setContext;
export const useFileUpload = root.getContext;
export const setFileUploadItemContext = item.setContext;
export const useFileUploadItem = item.getContext;
