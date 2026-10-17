import source from "./default.tsx?raw";
import { ColorPicker } from "@pisagor/solid";

export function Default() {
  return <ColorPicker.Field defaultValue="#3b82f6" />;
}

export { source as DefaultSource };
