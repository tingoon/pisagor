<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Tabs } from "@pisagor/svelte/tabs";

let value = $state("profile");
</script>

<div class="flex flex-col gap-2">
  <Tabs
    items={[
      {
        content: "Manage your profile information and preferences.",
        label: "Profile",
        value: "profile",
      },
      {
        content: "Customize notifications, theme, and text density.",
        label: "Settings",
        value: "settings",
      },
      {
        content: "Update your password and security settings.",
        label: "Security",
        value: "security",
      },
    ]}
    onValueChange={(e) => (value = e.value)}
    {value}
  />
  <div class="flex gap-2">
    <Button onClick={() => (value = "profile")} size="sm" variant="outline">
      Go to Profile
    </Button>
    <Button onClick={() => (value = "settings")} size="sm" variant="outline">
      Go to Settings
    </Button>
    <Button onClick={() => (value = "security")} size="sm" variant="outline">
      Go to Security
    </Button>
  </div>
</div>
