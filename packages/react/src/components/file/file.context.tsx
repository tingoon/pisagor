import type { FileSlots } from "@pisagor/recipes/file";
import { createContext } from "../../internal/utils";

interface FileContextValue {
  slots: FileSlots;
}

export const { FileContext, useFile } = createContext<FileContextValue>()({
  name: "File",
});
