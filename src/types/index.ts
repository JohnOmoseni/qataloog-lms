import { LinkProps } from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";

export type Status = "update" | "edit" | "cancel" | "delete";

export type SidebarLinksProp = React.PropsWithChildren<LinkProps> & {
  icon: any;
  label: string;
  href: string;
  tag?: string;
};

export type TabsPanelProp = {
  activeTab: string;
  id: string;
  idx: number;
  children: React.ReactNode;
};

export type TabsProps = {
  activeTab: string;
  changeTab: (id: string) => void;
  tabIDs: string[];
};

export type TabProps = {
  id: string;
  activeTab: string;
  tab: string;
  changeTab: (id: string) => void;
  className?: string;
};

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
