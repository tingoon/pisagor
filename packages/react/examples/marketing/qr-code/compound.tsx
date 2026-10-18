import { QrCode } from "@pisagor/react";

export function Compound() {
  return (
    <QrCode value="https://example.com">
      <QrCode.Frame />
    </QrCode>
  );
}
