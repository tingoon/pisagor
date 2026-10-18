import { Button, Toolbar } from "@pisagor/react";
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
      className="items-center"
      title="Team members"
    />
  );
}
