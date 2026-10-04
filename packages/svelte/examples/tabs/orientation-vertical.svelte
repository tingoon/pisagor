<script lang="ts">
import { Tabs } from "@pisagor/svelte";
import { numberedTabs } from "./helpers";
</script>

<Tabs defaultValue="tab-1" items={numberedTabs()} orientation="vertical" />
