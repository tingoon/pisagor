import source from "./default.tsx?raw";
import { ImageCropper } from "@pisagor/solid";

export function Default() {
  return <ImageCropper src="https://picsum.photos/400/300" />;
}

export { source as DefaultSource };
