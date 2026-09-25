import EmptyStateShorthand from "./empty-state.svelte";
import EmptyStateActions from "./empty-state-actions.svelte";
import EmptyStateDescription from "./empty-state-description.svelte";
import EmptyStateMedia from "./empty-state-media.svelte";
import EmptyStateRoot from "./empty-state-root.svelte";
import EmptyStateTitle from "./empty-state-title.svelte";

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
