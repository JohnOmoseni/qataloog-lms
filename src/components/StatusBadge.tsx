import clsx from "clsx";

import { StatusIcon } from "@/constants";
import { Status } from "@/types";

export const StatusBadge = ({ status }: { status: Status }) => {
  const Icon = StatusIcon[status];
  return (
    <div className={clsx("row-flex-start cursor-pointer gap-1")}>
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
        className={clsx({
          "h-7 w-7 rounded-full bg-red-100 p-1": status === "delete",
        })}
      >
        <Icon className="h-fit w-fit" />
      </div>
    </div>
  );
};
