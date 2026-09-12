import EmptyStateShorthand from "./empty-state.astro";
import EmptyStateActions from "./empty-state-actions.astro";
import EmptyStateDescription from "./empty-state-description.astro";
import EmptyStateMedia from "./empty-state-media.astro";
import EmptyStateRoot from "./empty-state-root.astro";
import EmptyStateTitle from "./empty-state-title.astro";

export const EmptyState = Object.assign(EmptyStateShorthand, {
  Actions: EmptyStateActions,
  Description: EmptyStateDescription,
  Media: EmptyStateMedia,
  Root: EmptyStateRoot,
  Title: EmptyStateTitle,
});
