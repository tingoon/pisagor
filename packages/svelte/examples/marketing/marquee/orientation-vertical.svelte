<script lang="ts">
  import { Card, Marquee } from "@pisagor/svelte";
  import { marqueeIcons } from "./marquee-icon-row.svelte";
</script>

<Marquee.Root>
  <Marquee.Viewport>
    <Marquee.Content>
      {#each marqueeIcons as IconComponent}
        <Marquee.Item>
          <Card>
            <Card.Content class="flex justify-center">
              <IconComponent class="size-10" />
            </Card.Content>
          </Card>
        </Marquee.Item>
      {/each}
    </Marquee.Content>
  </Marquee.Viewport>
  <Marquee.Edge side="start" />
  <Marquee.Edge side="end" />
</Marquee.Root>
