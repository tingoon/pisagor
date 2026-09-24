<script lang="ts">
import { ContextMenu } from "../index";
</script>

<ContextMenu>
  <ContextMenu.ContextTrigger
    class="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm"
  >
    Right click here
  </ContextMenu.ContextTrigger>
  <ContextMenu.Content>
    <ContextMenu.Item value="copy">Copy</ContextMenu.Item>
    <ContextMenu.Item value="paste">Paste</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item value="delete" variant="destructive">Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu>
