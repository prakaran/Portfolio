import { cn } from "@/lib/utils";
import React from "react";
import Scales from "./scales";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={cn(
          "relative mx-auto w-full max-w-4xl bg-white dark:bg-black",
          className,
        )}
      >
        <Scales />
        <div className="px-2">{children}</div>
      </div>
    </>
  );
};

export default Container;
