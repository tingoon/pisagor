<script lang="ts">
import { Button } from "@pisagor/svelte";
import { DropdownMenu } from "@pisagor/svelte/dropdown-menu";
</script>

<DropdownMenu>
      <DropdownMenu.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-40">
        <DropdownMenu.ItemGroup heading="Account">
          <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
          <DropdownMenu.Item value="billing">Billing</DropdownMenu.Item>
        </DropdownMenu.ItemGroup>
        <DropdownMenu.Separator />
        <DropdownMenu.ItemGroup>
          <DropdownMenu.ItemGroupLabel>Support</DropdownMenu.ItemGroupLabel>
          <DropdownMenu.Item value="docs">Docs</DropdownMenu.Item>
          <DropdownMenu.Item value="contact">Contact</DropdownMenu.Item>
        </DropdownMenu.ItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
