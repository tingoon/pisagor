import ToolbarActions from "./toolbar-actions.svelte";
import ToolbarDescription from "./toolbar-description.svelte";
import ToolbarHeading from "./toolbar-heading.svelte";
import ToolbarRoot from "./toolbar-root.svelte";
import ToolbarShorthand from "./toolbar-shorthand.svelte";
import ToolbarTitle from "./toolbar-title.svelte";

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
