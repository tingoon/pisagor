import type { FileUploadVariants } from "@pisagor/styles/ui/file-upload";
import { createContext } from "../../utils";

interface FileUploadContextValue {
  slots: FileUploadVariants;
}

export const { FileUploadContext, useFileUpload } = createContext<FileUploadContextValue>()({
  name: "FileUpload",
});
