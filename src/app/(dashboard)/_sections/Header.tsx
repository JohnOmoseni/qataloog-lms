"use client";

import AvatarWrapper from "@/components/ui/components/AvatarWrapper";
import Image from "next/image";
import Link from "next/link";
import FlagSelect from "@/components/FlagSelect";

import { logo, Menu } from "@/constants/icons";
import { setOpenMenu } from "@/redux/features/appSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="relative z-10 min-h-[50px] w-full bg-background-100 px-3 pt-3 shadow-sm max-md:pb-3 md:min-h-[70px]">
      <div className="row-flex-btwn mx-auto gap-4 md:w-[96%]">
        <div
          className="row-flex group cursor-pointer md:hidden"
          onClick={() => dispatch(setOpenMenu(true))}
        >
          <Menu size={22} className="transition-all group-hover:scale-95" />
        </div>

        <Link href="/" className="row-flex-start">
          <Image
            src={logo}
            alt="logo"
            priority
            width={180}
            height={28}
            className="h-fit w-32 object-contain max-md:mx-auto sm:w-40"
          />
        </Link>

        <div className="row-flex gap-6">
          <div className="hidden md:block">
            <FlagSelect
              containerStyles="remove-border"
              customLabels={{
                NG: { primary: "English" },
                SN: { primary: "French" },
                IT: { primary: "Italian" },
              }}
            />
          </div>

          <Link href="#" className="row-flex gap-2.5">
            <div className="relative">
              <AvatarWrapper />

              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full outline outline-1 outline-offset-0 outline-green-50/70">
                <span className="absolute inset-0 animate-pulse rounded-full border border-white/50 bg-green-500" />
              </div>
            </div>
            <p className="line-clamp-2 w-[8ch] text-sm font-medium max-[380px]:w-[6ch] sm:text-base">
              Qatar Admin
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
