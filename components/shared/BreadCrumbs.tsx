"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

const BreadCrumbs = ({ lastChild }: { lastChild?: string }) => {
  const pathname = usePathname();
  const pathArr = pathname.split("/");

  return (
    <Breadcrumb className="px-20 py-2 w-full">
      <BreadcrumbList>
        <BreadcrumbItem className="px-4 py-2 bg-gray-50 text-muted-foreground text-sm rounded-lg">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {pathArr.slice(1).map((item, i) => {
          const last = pathArr[pathArr.length - 1] === item;

          return (
            <>
              <BreadcrumbSeparator>
                <div className="text-muted-foreground w-1 h-1 rounded-full bg-muted-foreground" />
              </BreadcrumbSeparator>
              <BreadcrumbItem
                key={i}
                className="px-4 py-2 bg-gray-50 text-muted-foreground text-sm rounded-lg"
              >
                <BreadcrumbLink href={`/${item}`}>
                  {last ? lastChild : item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
