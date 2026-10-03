/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { Toolbar } from "@pisagor/solid/toolbar";
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
