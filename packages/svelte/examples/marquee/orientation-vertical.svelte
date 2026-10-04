<script lang="ts">
import { Card } from "@pisagor/svelte";
import { Marquee } from "@pisagor/svelte/marquee";
</script>

<Marquee.Root>
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
    </Marquee.Root>
