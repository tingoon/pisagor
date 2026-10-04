/** @jsxImportSource solid-js */
import { Button, Toolbar } from "@pisagor/solid";

export function Default() {
  return (
    <Toolbar
      actions={<Button size="sm">Edit</Button>}
      description="Manage your project settings"
      title="Project"
    />
  );
}
