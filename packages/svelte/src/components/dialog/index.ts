import DialogShorthand from "./dialog.svelte";
import DialogBackdrop from "./dialog-backdrop.svelte";
import DialogBody from "./dialog-body.svelte";
import DialogCloseTrigger from "./dialog-close-trigger.svelte";
import DialogContent from "./dialog-content.svelte";
import DialogDescription from "./dialog-description.svelte";
import DialogFooter from "./dialog-footer.svelte";
import DialogHeader from "./dialog-header.svelte";
import DialogPositioner from "./dialog-positioner.svelte";
import DialogRoot from "./dialog-root.svelte";
import DialogTitle from "./dialog-title.svelte";
import DialogTrigger from "./dialog-trigger.svelte";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop: DialogBackdrop,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Positioner: DialogPositioner,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});

export { useDialog } from "./dialog.context";
