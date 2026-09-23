import { ArrowDownIcon, ArrowUpIcon } from "@phosphor-icons/react";
import { Stat } from "..";

export function WithTrend() {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <Stat
        description="Compared with last week"
        label="New signups"
        trend={
          <>
            <ArrowUpIcon />
            +12.6%
          </>
        }
        trendProps={{ trend: "up" }}
        value="1,284"
      />
      <Stat
        description="Compared with last month"
        label="Churn rate"
        trend={
          <>
            <ArrowDownIcon />
            -0.8%
          </>
        }
        trendProps={{ trend: "down" }}
        value="3.2%"
      />
    </div>
  );
}
