<script lang="ts">
  import { Button, Sheet } from "@pisagor/svelte";
</script>

<Sheet scrollFade title="Terms and conditions">
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet actions()}
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="ghost">Cancel</Button>
      {/snippet}
    </Sheet.CloseTrigger>
    <Sheet.CloseTrigger>
      {#snippet asChild(props)}
        <Button {...props()}>Agree</Button>
      {/snippet}
    </Sheet.CloseTrigger>
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
      quam posuere id.
    </p>
    <h3>Where does it come from?</h3>
    <p>
      Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Quisque
      urna lorem, porttitor ac malesuada at.
    </p>
    <h3>Where can I get some?</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
      semper eros a maximus.
    </p>
    <h3>Who can I contact if I have questions?</h3>
    <p>
      Donec tortor lorem, finibus vel suscipit vehicula, sagittis efficitur
      erat.
    </p>
    <h3>What happens if I don't agree to these terms?</h3>
    <p>
      Aenean maximus, libero vel laoreet congue, purus leo iaculis libero,
      egestas egestas quam mi at quam.
    </p>
  </div>
</Sheet>
