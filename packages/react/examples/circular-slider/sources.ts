import { ControlledSource as Controlled } from "./controlled";
import { CustomMarkersSource as CustomMarkers } from "./custom-markers";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { SizesSource as Sizes } from "./sizes";
import { StepSource as Step } from "./step";
import { ThicknessSource as Thickness } from "./thickness";
import { WithMarkersSource as WithMarkers } from "./with-markers";
import { WithValueSource as WithValue } from "./with-value";

export const imports = `import { CircularSlider } from "@pisagor/react";`;

export const sources = {
  Controlled,
  CustomMarkers,
  CustomRecipe,
  Default,
  Disabled,
  Sizes,
  Step,
  Thickness,
  WithMarkers,
  WithValue,
} as const;
