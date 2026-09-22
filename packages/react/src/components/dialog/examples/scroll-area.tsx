import { Portal } from "@ark-ui/react/portal";
import { Button } from "@pisagor/react";
import { Dialog } from "..";
export function ScrollArea() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content size="lg">
            <Dialog.Header>
              <Dialog.Title>Terms and conditions</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body scrollFade>
              <div className="space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm">
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat
                  nisl, ac consequat sem hendrerit in.
                </p>
                <h3>Why do we use it?</h3>
                <p>
                  Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam
                  posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit.
                </p>
                <h3>Where does it come from?</h3>
                <p>
                  Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque urna
                  lorem, porttitor ac malesuada at, vehicula eget nulla.
                </p>
                <h3>Where can I get some?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros
                  a maximus. Sed consequat tempus lobortis.
                </p>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="ghost">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button>Agree</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
