import DialogBackdrop from "../dialog/dialog-backdrop.svelte";
import DialogCloseTrigger from "../dialog/dialog-close-trigger.svelte";
import DialogDescription from "../dialog/dialog-description.svelte";
import DialogHeader from "../dialog/dialog-header.svelte";
import DialogTitle from "../dialog/dialog-title.svelte";
import DialogTrigger from "../dialog/dialog-trigger.svelte";
import SheetShorthand from "./sheet.svelte";
import SheetBody from "./sheet-body.svelte";
import SheetContent from "./sheet-content.svelte";
import SheetFooter from "./sheet-footer.svelte";
import SheetPositioner from "./sheet-positioner.svelte";
import SheetRoot from "./sheet-root.svelte";

export const Sheet = Object.assign(SheetShorthand, {
  Backdrop: DialogBackdrop,
  Body: SheetBody,
  CloseTrigger: DialogCloseTrigger,
  Content: SheetContent,
  Description: DialogDescription,
  Footer: SheetFooter,
  Header: DialogHeader,
  Positioner: SheetPositioner,
  Root: SheetRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
