import { FishIcon } from "@phosphor-icons/react";
import { QrCode } from "@pisagor/react";

export function Overlay() {
  return <QrCode overlay={<FishIcon />} value="https://example.com" />;
}
