<script module lang="ts">
  import {
    ArrowRightIcon,
    AtomIcon,
    DeviceMobileIcon,
    GlobeIcon,
    LightningIcon,
    RobotIcon,
    SparkleIcon,
    StackIcon,
  } from "phosphor-svelte";

  export const marqueeIcons = [
    GlobeIcon,
    DeviceMobileIcon,
    ArrowRightIcon,
    RobotIcon,
    SparkleIcon,
    LightningIcon,
    StackIcon,
    AtomIcon,
  ];
</script>

<script lang="ts">
  import { Card, Marquee } from "@pisagor/svelte";
</script>

<Marquee.Content>
  {#each marqueeIcons as IconComponent}
    <Marquee.Item>
      <Card class="[--space:--spacing(8)]">
        <Card.Content>
          <IconComponent class="size-10" />
        </Card.Content>
      </Card>
    </Marquee.Item>
  {/each}
</Marquee.Content>
