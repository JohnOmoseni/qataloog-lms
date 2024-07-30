"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { setOpenMenu } from "@/redux/features/appSlice";
import { animateFn, linksAni } from "@/lib/animate";
import { SidebarLinksProp, useAppDispatch, useAppSelector } from "@/types";
import Link from "next/link";
import { logo } from "@/constants/icons";
import { usePathname } from "next/navigation";

export type NavLinkProps = SidebarLinksProp & {
  idx?: number;
};

function NavLinks({ label, href, tag, icon: Icon, idx }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const { openMenu } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const handleClick = (tag: string) => {
    if (openMenu) dispatch(setOpenMenu(false));
  };

  return (
    <li className="nav-link relative w-full">
      <Link
        href={href}
        {...animateFn(linksAni, idx)}
        onClick={() => handleClick(tag!)}
        className="row-flex-start gap-3 p-1 transition-all"
      >
        <Icon
          width={24}
          height={24}
          className={cn(isActive && "stroke-variant", "mt-0.5")}
        />

        <motion.span
          className={cn(
            "tracking-snug font-semibold capitalize",
            isActive && "text-foreground-variant",
          )}
        >
          {label}
        </motion.span>
      </Link>
    </li>
  );
}

export default NavLinks;
