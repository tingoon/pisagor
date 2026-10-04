/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Toolbar } from "@pisagor/solid/toolbar";

export function Default() {
  return (
    <Toolbar
      actions={<Button size="sm">Edit</Button>}
      description="Manage your project settings"
      title="Project"
    />
  );
}
