/** @jsxImportSource solid-js */
import { QrCode } from "@pisagor/solid";

export function ErrorCorrection() {
  const eccLevels = ["L", "M", "Q", "H"] as const;
  return (
    <div class="flex flex-wrap items-center gap-2">
      {eccLevels.map((ecc) => (
        <div class="flex flex-col items-center gap-2">
          <QrCode
            class="[--qr-code-size:6rem]"
            encoding={{ ecc }}
            value="https://example.com/docs"
          >
            <QrCode.Frame />
          </QrCode>
          <p class="text-muted-foreground text-sm">{ecc}</p>
        </div>
      ))}
    </div>
  );
}
