"use client";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";
import { earningsData } from "@/components/table/data";
import { CircleMinus, CirclePlus } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Earnings() {
  const [value, setValue] = useState<number>(10);

  const rate = 10;

  return (
    <div className="pb-[4rem]">
      <DataTable columns={columns} tableData={earningsData} />

      <div className="row-flex-btwn my-6 flex gap-4 max-[450px]:flex-col">
        <Button
          title="Add Level Rate"
          icon={CirclePlus}
          className="!max-w-max"
        />

        <div className="row-flex-btwn shad-grey-btn gap-3 !bg-transparent !p-1">
          <Input
            type="number"
            inputMode="numeric"
            disabled={true}
            min="0"
            max="100"
            step={rate}
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            className="shad-input !h-7 min-w-[100px] !rounded-md !bg-input !px-1.5 !text-foreground"
          />

          <div className="flex gap-1">
            <button
              className="transition-all active:translate-y-0.5 active:scale-95 active:brightness-90"
              disabled={value >= 100}
              onClick={() => {
                const newValue = (value + rate).toFixed(0);
                setValue(Number(newValue));
              }}
            >
              <CirclePlus size={24} className="text-secondary" />
            </button>
            <button
              className="transition-all active:translate-y-0.5 active:scale-95 active:brightness-90"
              disabled={false}
              onClick={() => {
                const newValue = (value - rate).toFixed(10);
                setValue(Math.max(Number(newValue), 0));
              }}
            >
              <CircleMinus size={24} className="text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earnings;
