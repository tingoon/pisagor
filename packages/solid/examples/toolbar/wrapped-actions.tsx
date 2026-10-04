/** @jsxImportSource solid-js */
import { Button, Toolbar } from "@pisagor/solid";
export function WrappedActions() {
  return (
    <Toolbar
      actions={
        <>
          <Button size="sm" variant="outline">
            Invite
          </Button>
          <Button size="sm" variant="outline">
            Export
          </Button>
          <Button size="sm">Add member</Button>
        </>
      }
      class="items-center"
      title="Team members"
    />
  );
}
