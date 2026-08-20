import { ark } from "@ark-ui/react/factory";
import { aspectRatioVariants } from "@pisagor/styles/ui/aspect-ratio";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
type AspectRatioRootProps = ComponentProps<typeof ark.div>;

interface AspectRatioProps extends AspectRatioRootProps, WithTestId {}
// #endregion

// #region Part
export function AspectRatio({ className, testId, ...rest }: AspectRatioProps) {
  return (
    <ark.div
      {...rest}
      className={cn(aspectRatioVariants(), className)}
      data-part="root"
      data-scope="aspect-ratio"
      data-testid={testId}
    />
  );
}
// #endregion
