<script lang="ts">
  import { Card } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <Card {size}>
      <Card.Header>
        <Card.Title>Card header</Card.Title>
        <Card.Description>Size {size}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p class="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
    </Card>
  {/each}
</div>
