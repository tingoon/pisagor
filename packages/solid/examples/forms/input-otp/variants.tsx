import { InputOTP } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <InputOTP variant="primary" groupSize={3} />
      <InputOTP variant="secondary" groupSize={3} />
    </div>
  );
}
