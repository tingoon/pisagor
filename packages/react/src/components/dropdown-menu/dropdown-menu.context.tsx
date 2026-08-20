import { createContext } from "../../utils";

const [DropdownMenuRootContext, useDropdownMenuRoot] = createContext<{ testId?: string }>({
  name: "DropdownMenuRoot",
  strict: false,
});

export { DropdownMenuRootContext, useDropdownMenuRoot };
