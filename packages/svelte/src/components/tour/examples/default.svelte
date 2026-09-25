<script lang="ts">
import { Tour } from "../index";
</script>

<Tour steps={[{ description: "Start here", id: "welcome", title: "Welcome" }]}>
  <Tour.Trigger>Start tour</Tour.Trigger>
  <Tour.Backdrop />
  <Tour.Spotlight />
  <Tour.Content>
    <Tour.Title />
    <Tour.Description />
    <Tour.Actions />
  </Tour.Content>
</Tour>
