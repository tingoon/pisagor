import source from "./default.tsx?raw";
import { Marquee } from "@pisagor/solid";

export function Default() {
  return <Marquee items={["Solid", "Ark", "Pisagor", "UI"]} />;
}

export { source as DefaultSource };
