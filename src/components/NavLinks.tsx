"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { setOpenMenu } from "@/redux/features/appSlice";
import { animateFn, linksAni } from "@/lib/animate";
import { SidebarLinksProp, useAppDispatch, useAppSelector } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/constants/icons";

export type NavLinkProps = SidebarLinksProp & {
  idx?: number;
  menu?: boolean;
};

function NavLinks({ label, href, menu, tag, icon, idx }: NavLinkProps) {
  const navlink = "relative p-1 tracking-snug whitespace-nowrap ";
  const menulink = "";

  const { openMenu } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const handleClick = (tag: string) => {
    if (menu && openMenu) dispatch(setOpenMenu(false));
  };

  return (
    <>
      <Link
        href={href}
        {...(menu && animateFn(linksAni, idx))}
        onClick={() => handleClick(tag!)}
        className="flex-column group !items-center"
      >
        <motion.span>
          <Image
            src={icon!}
            alt=""
            width={1000}
            height={1000}
            className="h-8 w-fit"
          />
        </motion.span>
        <motion.span
          className={cn(
            "font-bold capitalize transition-colors group-hover:text-secondary-foreground",
            menu ? menulink : navlink,
          )}
        >
          {label}
        </motion.span>
      </Link>
    </>
  );
}

export default NavLinks;
