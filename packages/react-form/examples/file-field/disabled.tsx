import source from "./disabled.tsx?raw";
import { FileField } from "@pisagor/react-form";

export function Disabled() {
  return <FileField disabled id="file-field-avatar-disabled" label="Avatar" />;
}

export { source as DisabledSource };
