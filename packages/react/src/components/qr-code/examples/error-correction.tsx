import { QrCode } from "..";

export function ErrorCorrection() {
  const eccLevels = ["L", "M", "Q", "H"] as const;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {eccLevels.map((ecc) => (
        <div className="flex flex-col items-center gap-2" key={ecc}>
          <QrCode
            className="[--qr-code-size:6rem]"
            encoding={{ ecc }}
            value="https://example.com/docs"
          >
            <QrCode.Frame />
          </QrCode>
          <p className="text-muted-foreground text-sm">{ecc}</p>
        </div>
      ))}
    </div>
  );
}
