import { QrCode } from "@pisagor/solid";

export function Compound() {
  return (
    <QrCode.Root value="https://example.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  );
}
