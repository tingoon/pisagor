import { InputOTP } from "@pisagor/solid";

export function CustomSize() {
  return (
    <InputOTP.Root>
      <InputOTP.Control>
        <InputOTP.Input class="size-12 text-lg" index={0} />
        <InputOTP.Input class="size-12 text-lg" index={1} />
        <InputOTP.Input class="size-12 text-lg" index={2} />
        <InputOTP.Input class="size-12 text-lg" index={3} />
      </InputOTP.Control>
    </InputOTP.Root>
  );
}
