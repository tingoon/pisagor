import { Button } from "@pisagor/react";
import { Toolbar } from "@pisagor/react/toolbar";
export function Default() {
  return (
    <Toolbar
      actions={
        <>
          <Button variant="outline">Import</Button>
          <Button>New project</Button>
        </>
      }
      description="Manage deployments and monitor activity."
      title="Projects"
    />
  );
}
