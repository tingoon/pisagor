import { InputOTP } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <InputOTP variant="primary" groupSize={3} />
      <InputOTP variant="secondary" groupSize={3} />
    </div>
  );
}
