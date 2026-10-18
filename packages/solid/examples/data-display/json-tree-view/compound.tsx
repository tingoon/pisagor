import { JsonTreeView } from "@pisagor/solid";
import { CaretRightIcon } from "@pisagor/solid/icons";
import { defaultData } from "./helpers";

export function Compound() {
  return (
    <JsonTreeView.Root data={defaultData()} defaultExpandedDepth={1}>
      <JsonTreeView.Tree arrow={<CaretRightIcon />} />
    </JsonTreeView.Root>
  );
}
