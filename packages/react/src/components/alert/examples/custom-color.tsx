import { MagicWandIcon } from "@phosphor-icons/react";
import { Alert } from "..";

export function CustomColor() {
  return (
    <Alert
      className="border-purple-500/32 bg-purple-500/5 [&_svg]:text-purple-500"
      description="This alert uses a custom color."
      icon={<MagicWandIcon />}
      title="Custom color alert"
    />
  );
}
