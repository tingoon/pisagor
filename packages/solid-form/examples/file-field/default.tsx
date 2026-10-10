import { FileField } from "@pisagor/solid-form";

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
