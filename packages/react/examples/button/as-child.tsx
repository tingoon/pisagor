import { Button } from "@pisagor/react/button";

export function AsChild() {
  return (
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  );
}
