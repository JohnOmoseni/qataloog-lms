"use client";

import { motion } from "framer-motion";
import { sidebarLinks } from "@/constants";
import { Close } from "@/constants/icons";
import { useAppDispatch } from "@/types";
import { setOpenMenu } from "@/redux/features/appSlice";
import { animateFn, revealMenu, slideinVariant } from "@/lib/animate";
import NavLinks from "./NavLinks";

function Menu() {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 block h-dvh w-full bg-black/30 backdrop-blur-sm md:hidden"
      {...animateFn(revealMenu)}
      onClick={() => dispatch(setOpenMenu(false))}
    >
      <motion.div
        {...animateFn(slideinVariant)}
        className="menu flex-column fixed right-0 top-0 isolate h-dvh w-[80%] max-w-[400px] overflow-hidden bg-background px-[4%] backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="icon absolute right-4 top-3 p-1 transition-colors active:scale-95"
          onClick={() => setOpenMenu(false)}
          title="close-menu"
        >
          <Close size="22" className="cursor-pointer text-foreground" />
        </span>

        <nav className="flex-column mx-auto flex-1 !items-center gap-8 pt-[10%] text-xl">
          {sidebarLinks.map((link, idx) => (
            <NavLinks key={idx} {...link} menu idx={idx} />
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}

export default Menu;
