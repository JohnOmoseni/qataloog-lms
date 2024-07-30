import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";
import { Status } from "@/types";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div className={clsx("row-flex-start gap-1")}>
      {status !== "delete" && (
        <p
          className={clsx("font-medium capitalize", {
            "text-green-500": status === "update",
            "text-red-500": status === "cancel",
          })}
        >
          {status}
        </p>
      )}
      <div
        className={clsx("icon", {
          "h-6 w-6 rounded-full bg-red-100 p-1": status === "delete",
        })}
      >
        <Image
          src={StatusIcon[status]}
          alt=""
          width={20}
          height={20}
          className=""
        />
      </div>
    </div>
  );
};
