import type { FileInputVariants } from "@pisagor/styles/ui/file-input";
import { createContext } from "../../utils";

interface FileInputContextValue {
  slots: FileInputVariants;
}

export const { FileInputContext, useFileInput } = createContext<FileInputContextValue>()({
  name: "FileInput",
});
