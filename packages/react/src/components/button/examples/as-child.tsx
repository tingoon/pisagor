import { Button } from "..";

export function AsChild() {
  return (
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  );
}
