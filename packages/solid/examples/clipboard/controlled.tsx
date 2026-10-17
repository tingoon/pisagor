import { Button, Clipboard } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal("https://example.com/docs");

  return (
    <div class="flex flex-col gap-2">
      <Clipboard value={value()} />
      <Button
        onClick={() => setValue("https://example.com/docs/alternate")}
        variant="secondary"
      >
        Change URL
      </Button>
    </div>
  );
}
