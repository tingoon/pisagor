import { createContext } from "../../utils";

export const { DropdownMenuRootContext, useDropdownMenuRoot } = createContext<{
  testId?: string;
}>()({
  name: "DropdownMenuRoot",
  strict: false,
});
