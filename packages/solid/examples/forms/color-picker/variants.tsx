import { ColorPicker } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary" />
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary" />
    </div>
  );
}
