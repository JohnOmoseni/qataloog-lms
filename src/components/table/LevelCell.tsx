import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { primaryLevels } from "@/constants";
import { startTransition, useEffect, useState } from "react";

const SelectDropdown = ({ getValue, row, column, table }: any) => {
  // const { id, level, levels, color } = getValue() || {};
  const level = getValue();
  const [academicLevels, setAcademicLevels] = useState(primaryLevels);

  const onChangeHandler = (value: string) => {
    console.log(value);
    table.options.meta?.updateData(row.index, column.id, value);
  };

  return (
    <Select onValueChange={onChangeHandler} defaultValue={""}>
      <SelectTrigger className="h-8 gap-1.5 border-0 bg-inherit text-base focus:ring-transparent md:whitespace-nowrap">
        {/* <SelectValue placeholder="Category" /> */}

        {level}
      </SelectTrigger>
      <SelectContent className="shad-select-content">
        {academicLevels.length > 0 &&
          academicLevels.map((level, idx) => (
            <SelectItem key={idx} value={level!} className="shad-select-item">
              {level}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default SelectDropdown;
