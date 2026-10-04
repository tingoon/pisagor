/** @jsxImportSource solid-js */
import { Button, Toolbar } from "@pisagor/solid";
export function Compound() {
  return (
    <Toolbar.Root>
      <Toolbar.Heading>
        <Toolbar.Title>Projects</Toolbar.Title>
        <Toolbar.Description>
          Manage deployments and monitor activity.
        </Toolbar.Description>
      </Toolbar.Heading>
      <Toolbar.Actions>
        <Button variant="outline">Import</Button>
        <Button>New project</Button>
      </Toolbar.Actions>
    </Toolbar.Root>
  );
}
