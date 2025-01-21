import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

const Container = ({ children,className }: { children: React.ReactNode,className?:ClassValue }) => {
  return (<div className={cn("mx-auto max-w-7xl",className)}>{children}</div>)
};

export default Container;
