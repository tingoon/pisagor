import { Stat } from "@pisagor/solid";
import { ArrowDownIcon, ArrowUpIcon } from "@pisagor/solid/icons";

export function WithTrend() {
  return (
    <div class="grid gap-2 sm:grid-cols-2">
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
