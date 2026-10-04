/** @jsxImportSource solid-js */

import { Alert, Button } from "@pisagor/solid";
import { ChecksIcon } from "@pisagor/solid/icons";
export function Compound() {
  return (
    <Alert.Root variant="info">
      <ChecksIcon />
      <Alert.Title>Deployment successful</Alert.Title>
      <Alert.Description>
        You can now start building your next great project.
      </Alert.Description>
      <Alert.Action>
        <Button size="xs">Update</Button>
      </Alert.Action>
    </Alert.Root>
  );
}
