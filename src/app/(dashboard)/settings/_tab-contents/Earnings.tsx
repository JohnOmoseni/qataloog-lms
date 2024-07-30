import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";
import { earningsData } from "@/components/table/data";
import { CircleMinus, CirclePlus } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Input } from "@/components/ui/input";
import Search from "../../_sections/Search";

function Earnings() {
  return (
    <div className="relative pb-[4rem]">
      <DataTable columns={columns} data={earningsData} />

      <div className="row-flex-btwn my-6 flex gap-4 max-[450px]:flex-col">
        <Button
          title="Add Level Rate"
          icon={CirclePlus}
          className="!max-w-max"
        />

        <div className="row-flex-btwn shad-grey-btn gap-3 !bg-transparent !p-1">
          <Input className="shad-input !h-7 max-w-[100px] !rounded-md !bg-input !px-1.5" />

          <div className="flex gap-1">
            <CirclePlus size={24} className="text-secondary" />
            <CircleMinus size={24} className="text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earnings;