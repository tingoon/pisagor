import source from "./custom-size.tsx?raw";
import { Rating } from "@pisagor/solid";

export function CustomSize() {
  return <Rating class="**:data-[slot=rating-item-indicator]:size-8" />;
}

export { source as CustomSizeSource };
