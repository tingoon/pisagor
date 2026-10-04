<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Alert } from "@pisagor/svelte/alert";
import ChecksIcon from "phosphor-svelte/lib/ChecksIcon";
</script>

<Alert.Root variant="info">
      <ChecksIcon />
      <Alert.Title>Deployment successful</Alert.Title>
      <Alert.Description>
        You can now start building your next great project.
      </Alert.Description>
      <Alert.Action>
        <Button size="xs">Update</Button>
      </Alert.Action>
    </Alert.Root>
