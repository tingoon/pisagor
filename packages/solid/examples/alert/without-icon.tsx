import source from "./without-icon.tsx?raw";
import { Alert } from "@pisagor/solid";

export function WithoutIcon() {
  return (
    <Alert
      description="Pass icon={null} to hide the default variant icon."
      icon={null}
      title="Saved"
      variant="success"
    />
  );
}

export { source as WithoutIconSource };
