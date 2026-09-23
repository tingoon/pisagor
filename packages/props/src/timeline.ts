import type {
  TimelineItemRecipeFn,
  TimelineRecipeFn,
  TimelineVariantProps,
} from "@pisagor/recipes/timeline";

/** Timeline props. */
export interface TimelineProps extends TimelineVariantProps {
  /**
   * Style recipe override.
   * @defaultValue timelineRecipe
   */
  recipe?: TimelineRecipeFn;
}

/** TimelineItem props. */
export interface TimelineItemProps {
  /**
   * Style recipe override.
   * @defaultValue timelineItemRecipe
   */
  recipe?: TimelineItemRecipeFn;
}
