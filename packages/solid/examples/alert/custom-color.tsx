import source from "./custom-color.tsx?raw";
import { Alert } from "@pisagor/solid";
import { MagicWandIcon } from "@pisagor/solid/icons";

export function CustomColor() {
  return (
    <Alert
      class="border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500"
      description="This alert uses a custom color."
      icon={<MagicWandIcon />}
      title="Custom color alert"
    />
  );
}

export { source as CustomColorSource };
