import { calendarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useCalendar,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Calendar",
  recipe: calendarRecipe,
});

/** Compat for Calendar root / DatePicker. Prefer `Context.set` / `withProvider`. */
export function setCalendarSlotsContext(value: {
  slots: ReturnType<typeof calendarRecipe>;
}) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
}
