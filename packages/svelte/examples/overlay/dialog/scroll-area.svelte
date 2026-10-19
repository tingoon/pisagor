<script lang="ts">
  import { Button, Dialog } from "@pisagor/svelte";
</script>

<Dialog scrollFade size="lg" title="Terms and conditions">
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="ghost">Cancel</Button>
      {/snippet}
    </Dialog.CloseTrigger>
    <Dialog.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Agree</Button>
      {/snippet}
    </Dialog.CloseTrigger>
  {/snippet}

  <div
    class="**:[p]:text-muted-foreground space-y-2 **:[h3]:font-semibold **:[p]:text-sm"
  >
    <h3>What is Lorem Ipsum?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      placerat nisl, ac consequat sem hendrerit in.
    </p>
    <h3>Why do we use it?</h3>
    <p>
      Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo
      quam posuere id. Cras varius, nunc non placerat vulputate, dolor turpis
      elementum elit.
    </p>
    <h3>Where does it come from?</h3>
    <p>
      Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque
      urna lorem, porttitor ac malesuada at, vehicula eget nulla.
    </p>
    <h3>Where can I get some?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
      semper eros a maximus. Sed consequat tempus lobortis.
    </p>
  </div>
</Dialog>
