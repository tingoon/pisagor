import source from "./default.tsx?raw";
import { Rating } from "@pisagor/react";

export function Default() {
  return <Rating defaultValue={3} />;
}

export { source as DefaultSource };
