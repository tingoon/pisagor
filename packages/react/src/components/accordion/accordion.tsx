import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
  accordionContentBodyVariants,
  accordionContentVariants,
  accordionIndicatorVariants,
  accordionItemVariants,
  accordionTriggerVariants,
} from "@pisagor/styles/accordion";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface AccordionPresetItem {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root> & WithTestId;

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
}

// #endregion

// #region Components
export function AccordionRoot({
  collapsible = true,
  lazyMount = true,
  unmountOnExit = true,
  children,
  testId,
  ...rest
}: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root
      {...rest}
      collapsible={collapsible}
      data-testid={testId}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}
AccordionRoot.displayName = "Accordion.Root";

export function AccordionItem({
  className,
  ...rest
}: ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item {...rest} className={cn(accordionItemVariants(), className)} />;
}
AccordionItem.displayName = "Accordion.Item";

export function AccordionTrigger({
  className,
  children,
  ...rest
}: ComponentProps<typeof AccordionPrimitive.ItemTrigger>) {
  return (
    <AccordionPrimitive.ItemTrigger {...rest} className={cn(accordionTriggerVariants(), className)}>
      {children}

      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon className={accordionIndicatorVariants()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}
AccordionTrigger.displayName = "Accordion.Trigger";

export function AccordionContent({
  className,
  children,
  ...rest
}: ComponentProps<typeof AccordionPrimitive.ItemContent>) {
  return (
    <AccordionPrimitive.ItemContent {...rest} className={cn(accordionContentVariants(), className)}>
      <div className={accordionContentBodyVariants()}>{children}</div>
    </AccordionPrimitive.ItemContent>
  );
}
AccordionContent.displayName = "Accordion.Content";

// #endregion

// #region Shorthand
export function AccordionShorthand({ items, ...rest }: AccordionProps) {
  return (
    <AccordionRoot {...rest}>
      {items?.map((item) => (
        <AccordionItem disabled={item.disabled} key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
AccordionShorthand.displayName = "Accordion";
// #endregion
