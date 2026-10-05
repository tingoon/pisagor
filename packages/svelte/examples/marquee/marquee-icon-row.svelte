<script lang="ts" module>
import ArrowRightIcon from "phosphor-svelte/lib/ArrowRightIcon";
import AtomIcon from "phosphor-svelte/lib/AtomIcon";
import DeviceMobileIcon from "phosphor-svelte/lib/DeviceMobileIcon";
import GlobeIcon from "phosphor-svelte/lib/GlobeIcon";
import LightningIcon from "phosphor-svelte/lib/LightningIcon";
import RobotIcon from "phosphor-svelte/lib/RobotIcon";
import SparkleIcon from "phosphor-svelte/lib/SparkleIcon";
import StackIcon from "phosphor-svelte/lib/StackIcon";

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
