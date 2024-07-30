"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const FlagSelect = ({
  containerStyles,
  customLabels,
}: {
  containerStyles?: string;
  customLabels?: any;
}) => {
  const [selected, setSelected] = useState("NG");

  const defaultLabels = {
    NG: { primary: "English" },
    FR: { primary: "French" },
    IT: { primary: "Italian" },
  };

  return (
    <ReactFlagsSelect
      selected={selected}
      countries={["FR", "NG", "IT"]}
      customLabels={customLabels ? customLabels : defaultLabels}
      onSelect={(code) => setSelected(code)}
      placeholder="Select Language"
      selectedSize={14}
      className="flags-select"
      selectButtonClassName={cn("select-field", containerStyles)}
    />
  );
};

export default FlagSelect;
