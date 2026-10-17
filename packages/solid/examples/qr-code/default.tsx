import source from "./default.tsx?raw";
import { QrCode } from "@pisagor/solid";

export function Default() {
  return <QrCode value="https://pisagor.dev" />;
}

export { source as DefaultSource };
