"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { setFilters } from "@/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/types";

type SearchProps = {
  containerStyles?: string;
  // filters: string;
  // setFilters: Dispatch<SetStateAction<string>>;
};

function Search({  containerStyles }: SearchProps) {
  const dispatch = useAppDispatch();
  const {filters} = useAppSelector(state => state.appState)
  return (
    <div className={cn(containerStyles)}>
      <Input
        value={filters}
        placeholder="Search"
        className="shad-input !pl-4"
        onChange={(e) => dispatch(setFilters(e.target.value))}
      />
    </div>
  );
}

export default Search;
