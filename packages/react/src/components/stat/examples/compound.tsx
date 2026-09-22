import { ArrowUpIcon } from "@phosphor-icons/react";
import { Stat } from "..";

export function Compound() {
  return (
    <Stat.Root>
      <Stat.Label>Monthly recurring revenue</Stat.Label>
      <Stat.Value>$124,320</Stat.Value>
      <Stat.Trend trend="up">
        <ArrowUpIcon />
        +12.6%
      </Stat.Trend>
      <Stat.Description>Updated 2 minutes ago</Stat.Description>
    </Stat.Root>
  );
}
