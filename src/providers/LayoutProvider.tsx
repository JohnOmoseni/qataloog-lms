"use client";

import { useAppDispatch, useAppSelector } from "@/types";
import { Suspense, useEffect } from "react";
import { setNetwork, setScreenSize } from "@/redux/features/appSlice";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/Menu";
import Header from "@/app/(dashboard)/_sections/Header";
import FallbackLoader from "@/components/fallback/FallbackLoader";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { openMenu } = useAppSelector((state) => state.appState);

  useEffect(() => {
    const updateNetwork = () => {
      dispatch(setNetwork(navigator.onLine));
    };
    const getScreenSize = () => {
      dispatch(setScreenSize(window?.innerWidth));
    };

    getScreenSize();
    updateNetwork();

    window.addEventListener("resize", getScreenSize);
    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);

    return () => {
      window.removeEventListener("resize", getScreenSize);
      window.removeEventListener("online", updateNetwork);
      window.removeEventListener("offline", updateNetwork);
    };
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence>{openMenu && <Menu />}</AnimatePresence>
      <Suspense fallback={<FallbackLoader />}>{children}</Suspense>
    </>
  );
}
export default LayoutProvider;
