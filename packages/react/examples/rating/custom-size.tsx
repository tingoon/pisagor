import source from "./custom-size.tsx?raw";
import { Rating } from "@pisagor/react";

export function CustomSize() {
  return <Rating className="**:data-[slot=rating-item-indicator]:size-8" />;
}

export { source as CustomSizeSource };
