import { FileInput } from "@pisagor/solid";

export function Accept() {
  return <FileInput accept="image/png,image/jpeg" />;
}
