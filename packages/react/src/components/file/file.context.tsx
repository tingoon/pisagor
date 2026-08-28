import type { FileVariants } from "@pisagor/recipes/file";
import { createContext } from "../../internal/utils";

interface FileContextValue {
  slots: FileVariants;
}

export const { FileContext, useFile } = createContext<FileContextValue>()({
  name: "File",
});
