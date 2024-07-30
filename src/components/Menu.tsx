"use client";

import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants";
import { Close, logo } from "@/constants/icons";
import { useAppDispatch } from "@/types";
import { setOpenMenu } from "@/redux/features/appSlice";
import { animateFn, revealMenu, slideinVariant } from "@/lib/animate";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 block h-svh w-full overflow-hidden bg-black/30 backdrop-blur-sm md:hidden"
      {...animateFn(revealMenu)}
      onClick={() => dispatch(setOpenMenu(false))}
    >
      <motion.div
        {...animateFn(slideinVariant)}
        className="menu remove-scrollbar fixed right-0 top-0 isolate h-dvh w-[80%] max-w-[400px] overflow-y-auto bg-background px-[3%] pb-6 pt-4 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="icon absolute right-4 top-2 p-1 transition-colors active:scale-95"
          onClick={() => dispatch(setOpenMenu(false))}
          title="close-menu"
        >
          <Close size="22" className="cursor-pointer text-foreground" />
        </span>

        <Image
          src={logo}
          alt="logo"
          priority
          width={180}
          height={28}
          className="h-fit w-32 object-contain"
        />

        <nav className="flex-1 pl-[4%] pt-[max(2rem,_10%)]">
          <ul className="flex-column gap-8 overflow-y-auto text-lg">
            {sidebarLinks.map((link, idx) => (
              <NavLinks key={idx} {...link} idx={idx} />
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
