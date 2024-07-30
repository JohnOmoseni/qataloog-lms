"use client";

import { cn } from "@/lib/utils";
import { TabProps, TabsProps } from "@/types";
import { motion } from "framer-motion";

const Tab = ({ id, activeTab, tab, changeTab, className }: TabProps) => {
  return (
    <li
      id={id}
      role="tab"
      aria-selected={activeTab === id ? "true" : "false"}
      className={cn(
        "leading-1 relative cursor-pointer whitespace-nowrap px-0.5 py-1 text-center capitalize",
        activeTab === id
          ? "font-semibold transition-all"
          : "font-medium text-grey",

        className,
      )}
      onClick={() => changeTab(id)}
    >
      {tab}

      {activeTab === id && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
          className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] w-full rounded-full bg-secondary"
        />
      )}
    </li>
  );
};

export const Tabs = ({ activeTab, changeTab, tabIDs }: TabsProps) => {
  return (
    <div className="remove-scrollbar overflow-x-auto">
      <ul
        role="tablist"
        aria-label="Tabs"
        className="row-flex-start am:gap-8 gap-6 px-1 lg:gap-12"
      >
        {tabIDs.map((tab, idx) => {
          return (
            <Tab
              key={idx}
              id={tabIDs[idx]}
              activeTab={activeTab}
              tab={tab}
              changeTab={changeTab}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
