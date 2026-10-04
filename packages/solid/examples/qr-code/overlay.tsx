/** @jsxImportSource solid-js */

import { QrCode } from "@pisagor/solid";
import { FishIcon } from "@pisagor/solid/icons";

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
