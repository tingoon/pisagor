<script lang="ts">
import { Stat } from "@pisagor/svelte";
import ArrowDownIcon from "phosphor-svelte/lib/ArrowDownIcon";
import ArrowUpIcon from "phosphor-svelte/lib/ArrowUpIcon";
</script>

<div class="grid gap-2 sm:grid-cols-2">
  <Stat.Root>
    <Stat.Label>New signups</Stat.Label>
    <Stat.Value>1,284</Stat.Value>
    <Stat.Description>Compared with last week</Stat.Description>
    <Stat.Trend trend="up">
      <ArrowUpIcon />
      +12.6%
    </Stat.Trend>
  </Stat.Root>
  <Stat.Root>
    <Stat.Label>Churn rate</Stat.Label>
    <Stat.Value>3.2%</Stat.Value>
    <Stat.Description>Compared with last month</Stat.Description>
    <Stat.Trend trend="down">
      <ArrowDownIcon />
      -0.8%
    </Stat.Trend>
  </Stat.Root>
</div>
