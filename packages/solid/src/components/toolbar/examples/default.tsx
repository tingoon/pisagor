import { Button } from "../../button";
import { Toolbar } from "../index";

export function Default() {
  return (
    <Toolbar
      actions={<Button size="sm">Edit</Button>}
      description="Manage your project settings"
      title="Project"
    />
  );
}
