"use client";

import { tabIDs } from "@/constants";
import { useState } from "react";
import Tabs from "@/components/tabs/Tab";
import Profile from "./_tab-contents/Profile";
import TabsPanel from "@/components/tabs/TabsPanel";
import Password from "./_tab-contents/Password";
import Subscriptions from "./_tab-contents/Subscriptions";
import Earnings from "./_tab-contents/Earnings";
import Top from "../_sections/Top";
import Search from "../_sections/Search";

function Settings() {
  const [activeTab, setActiveTab] = useState(tabIDs[0]);

  const changeTab = (id: string) => {
    id && setActiveTab(id);
  };

  return (
    <>
      <Top title="Settings" />

      <div className="row-flex-btwn mt-6 !flex-wrap gap-4">
        <Tabs activeTab={activeTab} changeTab={changeTab} tabIDs={tabIDs} />

        {activeTab === tabIDs[3] && (
          <Search containerStyles="ml-auto max-sm:w-full max-w-xs" />
        )}
      </div>

      <div className="mt-8 w-full sm:mt-12">
        <TabsPanel activeTab={activeTab} id={tabIDs[0]} idx={0}>
          <Profile />
        </TabsPanel>
        <TabsPanel activeTab={activeTab} id={tabIDs[1]} idx={1}>
          <Password />
        </TabsPanel>
        <TabsPanel activeTab={activeTab} id={tabIDs[2]} idx={2}>
          <Subscriptions />
        </TabsPanel>
        <TabsPanel activeTab={activeTab} id={tabIDs[3]} idx={3}>
          <Earnings />
        </TabsPanel>
      </div>
    </>
  );
}

export default Settings;
