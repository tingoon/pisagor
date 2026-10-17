import source from "./compound.tsx?raw";
import { QrCode } from "@pisagor/react";

export function Compound() {
  return (
    <QrCode value="https://example.com">
      <QrCode.Frame />
    </QrCode>
  );
}

export { source as CompoundSource };
