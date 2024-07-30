import AvatarWrapper from "@/components/ui/components/AvatarWrapper";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/constants/icons";

function Header() {
  return (
    <div className="relative z-10 min-h-[50px] w-full bg-background-100 px-3 pt-3 shadow-sm max-md:pb-3 md:min-h-[70px]">
      <div className="row-flex-btwn mx-auto gap-4 md:w-[96%]">
        <Link href="/" className="row-flex-start">
          <Image
            src={logo}
            alt="logo"
            priority
            width={180}
            height={28}
            className="h-fit w-32 object-contain sm:w-40"
          />
        </Link>

        <Link href="#" className="row-flex gap-2.5">
          <div className="relative">
            <AvatarWrapper />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border border-white/50 bg-green-500" />
          </div>
          <p className="w-full break-words text-sm font-semibold sm:text-base">
            Qatar <br className="block min-[350px]:hidden" /> Admin
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
