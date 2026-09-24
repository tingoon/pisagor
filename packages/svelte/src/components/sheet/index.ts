import SheetBackdrop from "./sheet-backdrop.svelte";
import SheetBody from "./sheet-body.svelte";
import SheetCloseTrigger from "./sheet-close-trigger.svelte";
import SheetContent from "./sheet-content.svelte";
import SheetDescription from "./sheet-description.svelte";
import SheetFooter from "./sheet-footer.svelte";
import SheetHeader from "./sheet-header.svelte";
import SheetPositioner from "./sheet-positioner.svelte";
import SheetRoot from "./sheet-root.svelte";
import SheetTitle from "./sheet-title.svelte";
import SheetTrigger from "./sheet-trigger.svelte";

export const Sheet = Object.assign(SheetRoot, {
  Backdrop: SheetBackdrop,
  Body: SheetBody,
  CloseTrigger: SheetCloseTrigger,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Positioner: SheetPositioner,
  Root: SheetRoot,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
