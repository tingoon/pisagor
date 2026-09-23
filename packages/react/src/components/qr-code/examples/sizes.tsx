import { QrCode } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-2">
      <QrCode className="[--qr-code-size:6rem]">
        <QrCode.Frame className="rounded-md border" />
      </QrCode>
      <QrCode className="[--qr-code-size:8rem]">
        <QrCode.Frame className="rounded-md border" />
      </QrCode>
    </div>
  );
}
