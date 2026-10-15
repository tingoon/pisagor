import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/svelte/rating-group";
import RatingShorthand from "./rating.svelte";
import RatingControl from "./rating-control.svelte";
import RatingIndicator from "./rating-indicator.svelte";
import RatingItem from "./rating-item.svelte";
import RatingRoot from "./rating-root.svelte";

export const Rating = Object.assign(RatingShorthand, {
  Context: RatingGroupPrimitive.Context,
  Control: RatingControl,
  HiddenInput: RatingGroupPrimitive.HiddenInput,
  Indicator: RatingIndicator,
  Item: RatingItem,
  ItemContext: RatingGroupPrimitive.ItemContext,
  Root: RatingRoot,
});
