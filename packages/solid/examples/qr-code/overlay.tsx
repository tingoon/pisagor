/** @jsxImportSource solid-js */
import { FishIcon } from "@pisagor/solid/icons";
import { QrCode } from "@pisagor/solid/qr-code";

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
