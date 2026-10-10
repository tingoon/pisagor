import type { CircularSliderRecipe } from "@pisagor/recipes";
import { circularSliderRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useCircularSliderStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "CircularSlider",
  recipe: circularSliderRecipe,
});

export interface CircularSliderMetricsValue {
  ringCircumference: number;
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

/** Combined metrics + slots (compat for root typing). */
export type CircularSliderContextValue = CircularSliderMetricsValue & {
  slots: CircularSliderRecipe;
};

const metricsCtx = createContext(
  "CircularSliderMetrics",
)<CircularSliderMetricsValue>();
export const setCircularSliderMetricsContext = metricsCtx.setContext;
export const useCircularSliderMetrics = metricsCtx.getContext;

export function useCircularSlider() {
  const styles = useCircularSliderStyles();
  const metrics = useCircularSliderMetrics();
  return {
    get ringCircumference() {
      return metrics.ringCircumference;
    },
    get ringRadius() {
      return metrics.ringRadius;
    },
    get size() {
      return metrics.size;
    },
    get slots() {
      return styles.slots;
    },
    get thickness() {
      return metrics.thickness;
    },
    get thumbSize() {
      return metrics.thumbSize;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setCircularSliderContext(value: CircularSliderContextValue) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setCircularSliderMetricsContext({
    get ringCircumference() {
      return value.ringCircumference;
    },
    get ringRadius() {
      return value.ringRadius;
    },
    get size() {
      return value.size;
    },
    get thickness() {
      return value.thickness;
    },
    get thumbSize() {
      return value.thumbSize;
    },
  });
}
