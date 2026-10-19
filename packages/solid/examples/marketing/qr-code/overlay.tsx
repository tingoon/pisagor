import { FishIcon } from "@squidlab/phosphor-solid/icons";
import { QrCode } from "@pisagor/solid";

export function Overlay() {
  return <QrCode overlay={<FishIcon />} value="https://example.com" />;
}
