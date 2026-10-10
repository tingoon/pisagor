import { QrCode } from "@pisagor/react";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-2">
      <QrCode className="[--qr-code-size:6rem]" value="https://example.com" />
      <QrCode className="[--qr-code-size:8rem]" value="https://example.com" />
    </div>
  );
}
