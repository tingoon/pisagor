/** @jsxImportSource solid-js */
import { Button, Navbar } from "@pisagor/solid";

export function Default() {
  return (
    <Navbar>
      <Navbar.Brand>Pisagor</Navbar.Brand>
      <Navbar.Content>
        <Navbar.Nav>Docs</Navbar.Nav>
        <Navbar.Actions>
          <Button size="sm">Sign in</Button>
        </Navbar.Actions>
      </Navbar.Content>
    </Navbar>
  );
}
