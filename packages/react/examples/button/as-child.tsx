import source from "./as-child.tsx?raw";
import { Button } from "@pisagor/react";

export function AsChild() {
  return (
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  );
}

export { source as AsChildSource };
