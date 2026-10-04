<script lang="ts">
import { BottomNavigation, ScrollArea } from "@pisagor/svelte";
import BellIcon from "phosphor-svelte/lib/BellIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<div
  class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5"
>
  <ScrollArea>
    <div class="h-96"></div>
    <BottomNavigation defaultValue="/docs">
      <BottomNavigation.List class="absolute">
        <BottomNavigation.Item value="/">
          {#snippet asChild(
            props,
          )}
            <a {...props()} href="https://example.com/">
              <BottomNavigation.ItemIcon>
                <HouseIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </a>
          {/snippet}
        </BottomNavigation.Item>
        <BottomNavigation.Item value="/docs">
          {#snippet asChild(
            props,
          )}
            <a {...props()} href="https://example.com/search">
              <BottomNavigation.ItemIcon>
                <MagnifyingGlassIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
            </a>
          {/snippet}
        </BottomNavigation.Item>
        <BottomNavigation.Item value="/docs/components">
          {#snippet asChild(
            props,
          )}
            <a {...props()} href="https://example.com/news">
              <BottomNavigation.ItemIcon>
                <BellIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
            </a>
          {/snippet}
        </BottomNavigation.Item>
        <BottomNavigation.Item value="/docs/components">
          {#snippet asChild(
            props,
          )}
            <a {...props()} href="https://example.com/profile">
              <BottomNavigation.ItemIcon>
                <UserIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
            </a>
          {/snippet}
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  </ScrollArea>
</div>
