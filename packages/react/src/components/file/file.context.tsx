import type { FileVariants } from "@pisagor/styles/ui/file";
import { createContext } from "../../utils";

interface FileContextValue {
  slots: FileVariants;
}

export const { FileContext, useFile } = createContext<FileContextValue>()({
  name: "File",
});
