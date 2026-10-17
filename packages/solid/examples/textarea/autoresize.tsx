import source from "./autoresize.tsx?raw";
import { Textarea } from "@pisagor/solid";

export function Autoresize() {
  return <Textarea autoresize placeholder="Type your message here" />;
}

export { source as AutoresizeSource };
