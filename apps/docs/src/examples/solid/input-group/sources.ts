import { CodeEditorInputSource as CodeEditorInput } from "./code-editor-input";
import { InputGroupWithButtonSource as InputGroupWithButton } from "./input-group-with-button";
import { InputGroupWithInnerLabelSource as InputGroupWithInnerLabel } from "./input-group-with-inner-label";
import { InputGroupWithMenuSource as InputGroupWithMenu } from "./input-group-with-menu";
import { InputGroupWithNumberInputSource as InputGroupWithNumberInput } from "./input-group-with-number-input";
import { InputGroupWithTooltipSource as InputGroupWithTooltip } from "./input-group-with-tooltip";

export const imports = `import { … } from "@pisagor/solid";`;

export const sources = {
  CodeEditorInput,
  InputGroupWithButton,
  InputGroupWithInnerLabel,
  InputGroupWithMenu,
  InputGroupWithNumberInput,
  InputGroupWithTooltip,
} as const;
