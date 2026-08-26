import type { FileUploadItemVariants, FileUploadVariants } from "@pisagor/styles/ui/file-upload";
import { createContext } from "../../utils";

interface FileUploadContextValue {
  slots: FileUploadVariants;
}

interface FileUploadItemContextValue {
  slots: FileUploadItemVariants;
}

export const { FileUploadContext, useFileUpload } = createContext<FileUploadContextValue>()({
  name: "FileUpload",
});

export const { FileUploadItemContext, useFileUploadItem } =
  createContext<FileUploadItemContextValue>()({
    name: "FileUploadItem",
  });
