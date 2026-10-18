import { FishIcon } from "@phosphor-icons/react";
import { QrCode } from "@pisagor/react";

export function Overlay() {
  return (
    <QrCode>
      <QrCode.Frame />
      <QrCode.Overlay>
        <FishIcon />
      </QrCode.Overlay>
    </QrCode>
  );
}
