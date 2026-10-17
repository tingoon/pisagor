import source from "./default.tsx?raw";
import { QrCode } from "@pisagor/react";

export function Default() {
  return <QrCode value="https://example.com" />;
}

export { source as DefaultSource };
