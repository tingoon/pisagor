import { Button } from "../../../../../src/components/button";
import { Toolbar } from "../../../../../src/components/toolbar/index";

export function Default() {
  return (
    <Toolbar
      actions={<Button size="sm">Edit</Button>}
      description="Manage your project settings"
      title="Project"
    />
  );
}
