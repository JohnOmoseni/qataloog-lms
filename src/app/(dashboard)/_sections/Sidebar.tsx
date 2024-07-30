"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants";
import { SidebarLinksProp } from "@/types";
import { usePathname } from "next/navigation";
import { logout as Logout, triangle as Triangle } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import Link from "next/link";

const LinkRow = ({ href, icon: Icon, label, tag }: SidebarLinksProp) => {
  const link =
    "group relative w-full row-flex rounded-r-lg leading-none whitespace-nowrap transition-all";
  const activeLink = cn(
    link,
    "bg-secondary-100 text-foreground-variant shadow-inner",
  );

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? activeLink : link}>
      <Link
        className="nav-link row-flex-start size-full gap-4 p-3 px-[15%] font-semibold transition-all group-hover:scale-105"
        href={href}
      >
        <Icon
          width={24}
          height={24}
          className={cn(isActive && "stroke-variant", "mt-0.5")}
        />

        {label}
      </Link>

      {isActive && (
        <Triangle className="absolute -left-1 top-1/2 h-fit w-fit -translate-y-1/2" />
      )}
    </li>
  );
};

function Sidebar() {
  return (
    <motion.div className="flex size-full flex-col gap-[4rem] pb-6 pr-2 pt-8">
      <ul className="flex-column w-full gap-3">
        {sidebarLinks.map((link, idx) => (
          <LinkRow {...link} key={idx} />
        ))}
      </ul>
      <div className="mx-auto mt-auto">
        <Button
          title="Logout"
          btnType="outline"
          icon={Logout}
          className="!px-[4rem] !py-6 !text-lg"
        />
      </div>
    </motion.div>
  );
}
export default Sidebar;
