import source from "./disabled.tsx?raw";
import { Rating } from "@pisagor/react";

export function Disabled() {
  return <Rating defaultValue={3} disabled />;
}

export { source as DisabledSource };
