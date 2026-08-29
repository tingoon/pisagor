import type { FileUploadItemSlots, FileUploadSlots } from "@pisagor/recipes/file-upload";
import { createContext } from "../../internal/utils";

interface FileUploadContextValue {
  slots: FileUploadSlots;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemSlots;
}

export const { FileUploadContext, useFileUpload } = createContext<FileUploadContextValue>()({
  name: "FileUpload",
});

export const { FileUploadItemContext, useFileUploadItem } =
  createContext<FileUploadItemContextValue>()({
    name: "FileUploadItem",
  });
