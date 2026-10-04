<script lang="ts">
import { Steps } from "@pisagor/svelte";
import CreditCardIcon from "phosphor-svelte/lib/CreditCardIcon";
import HardDriveIcon from "phosphor-svelte/lib/HardDriveIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";

const items = [
  { icon: UserIcon, id: "user" },
  { icon: HardDriveIcon, id: "drive" },
  { icon: CreditCardIcon, id: "card" },
];
</script>

<Steps count={items.length}>
  <Steps.List>
    {#each items as item}
      <Steps.Item {index}>
        <Steps.Trigger>
          <Steps.Indicator>
            <item.icon />
          </Steps.Indicator>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    {/each}
  </Steps.List>
</Steps>
