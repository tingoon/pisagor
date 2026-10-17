import source from "./default.tsx?raw";
import { FileField } from "@pisagor/react-form";

export function Default() {
  return (
    <FileField
      accept="application/pdf"
      description="PDF only, up to 5 MB."
      id="file-field-resume"
      label="Resume"
    />
  );
}

export { source as DefaultSource };
