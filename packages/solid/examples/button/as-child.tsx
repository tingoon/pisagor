/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";

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
