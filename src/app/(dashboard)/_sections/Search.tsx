"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Search({ containerStyles }: { containerStyles?: string }) {
  const [search, setSearch] = useState("");

  return (
    <div className={cn(containerStyles)}>
      <Input
        value={search}
        placeholder="Search"
        className="shad-input !pl-4"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
