import { QrCode } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-wrap items-end justify-center gap-2">
      <QrCode class="[--qr-code-size:6rem]">
        <QrCode.Frame class="rounded-md border" />
      </QrCode>
      <QrCode class="[--qr-code-size:8rem]">
        <QrCode.Frame class="rounded-md border" />
      </QrCode>
    </div>
  );
}
