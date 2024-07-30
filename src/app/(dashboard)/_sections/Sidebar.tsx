"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants";
import { SidebarLinksProp } from "@/types";
import { usePathname } from "next/navigation";
import { logout, triangle } from "@/constants/icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/CustomButton";

const LinkRow = ({ href, icon, label, tag }: SidebarLinksProp) => {
  const link =
    "group relative w-full row-flex rounded-r-lg leading-none whitespace-nowrap transition-all ";
  const activeLink = cn(
    link,
    "bg-secondary-100 text-foreground-variant shadow-inner",
  );

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? activeLink : link}>
      <Link
        className="row-flex-start size-full gap-4 p-3 px-[15%] font-semibold"
        href={href}
      >
        <Image
          src={icon}
          alt="logo"
          width={24}
          height={24}
          className={cn(isActive && "brightness-200")}
        />
        {label}
      </Link>

      {isActive && (
        <Image
          src={triangle}
          alt=""
          width={1000}
          height={1000}
          className="absolute -left-3 h-8 w-8 object-contain"
        />
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
          src={logout}
          className="!px-[4rem] !py-6 !text-lg"
        />
      </div>
    </motion.div>
  );
}
export default Sidebar;
