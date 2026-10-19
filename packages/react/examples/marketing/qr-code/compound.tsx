import { QrCode } from "@pisagor/react";

export function Compound() {
  return (
    <QrCode.Root value="https://example.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
