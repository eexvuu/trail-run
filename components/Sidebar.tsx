"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Sidebar({
  className,
  navLinks,
}: {
  className: string;
  navLinks: any;
}) {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="border-b border-slate-600 pb-3">
            <SheetTitle className="text-left ">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 mt-5 ">
            {navLinks.map((nav: any, index: number) => (
              <li
                key={index}
                className="hover:bg-blue-500 capitalize list-none"
              >
                <Link href={nav.path}>{nav.label}</Link>
              </li>
            ))}
          </div>
          <SheetFooter className="text-sm mt-32 text-slate-500">
            copyright 2024 baturaden fest
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
