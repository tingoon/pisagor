import { CaretRightIcon } from "@phosphor-icons/react";
import { JsonTreeView } from "@pisagor/react";
import { defaultData } from "./helpers";

export function Compound() {
  return (
    <JsonTreeView.Root data={defaultData()} defaultExpandedDepth={1}>
      <JsonTreeView.Tree arrow={<CaretRightIcon />} />
    </JsonTreeView.Root>
  );
}
