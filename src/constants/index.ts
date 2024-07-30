import album from "@/svgs/album.svg";
import atm from "@/svgs/atm.svg";
import coupon from "@/svgs/coupon.svg";
import dashboard from "@/svgs/dashboard.svg";
import files from "@/svgs/files.svg";
import flag from "@/svgs/flag.svg";
import school from "@/svgs/school.svg";
import setting from "@/svgs/setting.svg";
import user from "@/svgs/user-group.svg";
import admin from "@/svgs/admin.svg";

import edit from "@/svgs/edit.svg";
import update from "@/svgs/update.svg";
import del from "@/svgs/delete.svg";
import cancel from "@/svgs/cancel.svg";

export const tabIDs = [
  "Profile",
  "Password",
  "Subscriptions",
  "Publish Earnings",
];

export const pricingTabIDs = ["Termly", "Bi-Annually", "Annually"];

export const StatusIcon = {
  update: update,
  edit: edit,
  delete: del,
  cancel: cancel,
};

export const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: dashboard,
  },
  {
    label: "Users",
    href: "/users",
    icon: user,
    pricingTabIDs,
  },
  {
    label: "Admins",
    href: "/admin",
    icon: admin,
  },
  {
    label: "Coupon Codes",
    href: "/coupon-codes",
    icon: coupon,
  },
  {
    label: "Academic Levels",
    href: "/academic-levels",
    icon: files,
  },
  {
    label: "Platforms",
    href: "/platforms",
    icon: school,
  },
  {
    label: "Countries",
    href: "/countries",
    icon: flag,
  },
  {
    label: "Content Type",
    href: "/content-type",
    icon: album,
  },
  {
    label: "Withdrawals",
    href: "/withdrawals",
    icon: atm,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: setting,
  },
];
