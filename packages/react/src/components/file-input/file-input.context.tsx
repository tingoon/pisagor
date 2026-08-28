import type { FileInputVariants } from "@pisagor/recipes/file-input";
import { createContext } from "../../internal/utils";

interface FileInputContextValue {
  slots: FileInputVariants;
}

export const { FileInputContext, useFileInput } = createContext<FileInputContextValue>()({
  name: "FileInput",
});
