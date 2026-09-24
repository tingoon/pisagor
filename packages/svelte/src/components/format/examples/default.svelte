<script lang="ts">
import { Format } from "../index";
</script>

<p><Format.Number value={1000} /></p>
<p><Format.Byte value={1024} /></p>
<p><Format.RelativeTime value={new Date(Date.now() - 60_000)} /></p>
