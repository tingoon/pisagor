import { Button } from "@pisagor/react";
import { Toolbar } from "..";
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
