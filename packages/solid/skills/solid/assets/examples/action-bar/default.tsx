import { ActionBar } from "../../../../../src/components/action-bar/index";
import { Button } from "../../../../../src/components/button";

export function Default() {
  return (
    <ActionBar>
      <ActionBar.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <ActionBar.Content aria-label="Bulk actions">
        <ActionBar.Value count={3} />
        <ActionBar.Separator />
        <ActionBar.Body>
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">Export</Button>
        </ActionBar.Body>
        <ActionBar.Separator />
        <ActionBar.Close>×</ActionBar.Close>
      </ActionBar.Content>
    </ActionBar>
  );
}
