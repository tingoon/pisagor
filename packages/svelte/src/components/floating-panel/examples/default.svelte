<script lang="ts">
import { FloatingPanel } from "../index";
</script>

<FloatingPanel>
  <FloatingPanel.Trigger>Open</FloatingPanel.Trigger>
  <FloatingPanel.Content>
    <FloatingPanel.Header>
      <FloatingPanel.Title>Panel</FloatingPanel.Title>
      <FloatingPanel.Control>
        <FloatingPanel.Minimize />
        <FloatingPanel.Maximize />
        <FloatingPanel.CloseTrigger>Close</FloatingPanel.CloseTrigger>
      </FloatingPanel.Control>
    </FloatingPanel.Header>
    <FloatingPanel.Body>Hello</FloatingPanel.Body>
  </FloatingPanel.Content>
</FloatingPanel>
