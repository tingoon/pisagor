import {
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarRoot,
  ToolbarShorthand,
  ToolbarTitle,
} from "./toolbar";

export type { ToolbarProps } from "./toolbar";

export const Toolbar = Object.assign(ToolbarShorthand, {
  Actions: ToolbarActions,
  Description: ToolbarDescription,
  Heading: ToolbarHeading,
  Root: ToolbarRoot,
  Title: ToolbarTitle,
});
