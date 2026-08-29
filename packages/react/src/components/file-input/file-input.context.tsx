import type { FileInputSlots } from "@pisagor/recipes/file-input";
import { createContext } from "../../internal/utils";

interface FileInputContextValue {
  slots: FileInputSlots;
}

export const { FileInputContext, useFileInput } = createContext<FileInputContextValue>()({
  name: "FileInput",
});
