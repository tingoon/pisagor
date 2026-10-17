import source from "./as-child.tsx?raw";
import { Button } from "@pisagor/solid";

export function AsChild() {
  return (
    <Button
      asChild={(props) => (
        <a {...props()} href="/login">
          Login
        </a>
      )}
    />
  );
}

export { source as AsChildSource };
