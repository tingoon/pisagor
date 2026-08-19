import { InputGroupInput, InputGroupTextarea } from "./input-group";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupRoot,
  InputGroupText,
} from "./input-group-core";

export type {
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupProps,
} from "./input-group-core";

export const InputGroup = Object.assign(InputGroupRoot, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Input: InputGroupInput,
  Text: InputGroupText,
  Textarea: InputGroupTextarea,
});
