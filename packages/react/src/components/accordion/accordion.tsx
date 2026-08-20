import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";
import {
  accordionItemContentVariants,
  accordionItemTriggerVariants,
  accordionItemVariants,
} from "@pisagor/styles/accordion";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
interface AccordionPresetItem {
  value: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root> & WithTestId;

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export type AccordionItemTriggerProps = ComponentProps<typeof AccordionPrimitive.ItemTrigger>;

export type AccordionItemContentProps = ComponentProps<typeof AccordionPrimitive.ItemContent>;

export interface AccordionProps extends Omit<AccordionRootProps, "children"> {
  items?: AccordionPresetItem[];
}
// #endregion

// #region Parts
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

export function AccordionItem({ className, ...rest }: AccordionItemProps) {
  return <AccordionPrimitive.Item {...rest} className={accordionItemVariants({ className })} />;
}

export function AccordionItemTrigger({ className, children, ...rest }: AccordionItemTriggerProps) {
  const recipe = accordionItemTriggerVariants();

  return (
    <AccordionPrimitive.ItemTrigger {...rest} className={recipe.base({ className })}>
      {children}

      <AccordionPrimitive.ItemIndicator>
        <CaretDownIcon className={recipe.indicator()} />
      </AccordionPrimitive.ItemIndicator>
    </AccordionPrimitive.ItemTrigger>
  );
}

export function AccordionItemContent({ className, children, ...rest }: AccordionItemContentProps) {
  const recipe = accordionItemContentVariants();

  return (
    <AccordionPrimitive.ItemContent {...rest} className={recipe.base({ className })}>
      <div className={recipe.body()}>{children}</div>
    </AccordionPrimitive.ItemContent>
  );
}
// #endregion

// #region Shorthand
export function AccordionShorthand({ items, ...rest }: AccordionProps) {
  return (
    <AccordionRoot {...rest}>
      {items?.map((item) => (
        <AccordionItem disabled={item.disabled} key={item.value} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.content}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
// #endregion

// #region Display Names
AccordionRoot.displayName = "Accordion.Root";
AccordionItem.displayName = "Accordion.Item";
AccordionItemTrigger.displayName = "Accordion.ItemTrigger";
AccordionItemContent.displayName = "Accordion.ItemContent";
AccordionShorthand.displayName = "Accordion";
// #endregion
