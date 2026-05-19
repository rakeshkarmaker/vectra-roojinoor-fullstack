"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Candidates", href: "/Candidates" },
  { label: "Companies", href: "/companies" },
  { label: "Jobs", href: "/jobs" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type MobileDropdownProps = {
  onUploadCv?: () => void;
};

type MobileMenuItem =
  | NavItem
  | {
      label: string;
      action: "upload-cv";
    };

export default function MobileDropdown({ onUploadCv }: MobileDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileMenuItems: MobileMenuItem[] = [
    ...NAV_ITEMS,
    { label: "Upload CV", action: "upload-cv" },
  ];

  const handleNavItemSelect = (item: NavItem) => {
    setOpen(false);

    if (item.href !== pathname) {
      router.push(item.href);
    }
  };

  const handleUploadCvSelect = () => {
    setOpen(false);
    onUploadCv?.();
  };

  const getItemClassName = (isActive: boolean) =>
    cn(
      "flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:bg-muted",
    );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className={cn(
          buttonVariants({ size: "icon", variant: "ghost" }),
          "lg:hidden",
        )}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </button>

      <SheetContent side="left" className="w-[min(22rem,100vw)] p-0">
        <div className="flex h-full flex-col bg-popover">
          <SheetHeader className="border-b border-border px-5 py-5">
            <SheetTitle className="text-left text-base font-semibold tracking-tight">
              Navigation
            </SheetTitle>
            <SheetDescription className="text-left text-sm text-muted-foreground">
              Quick access to the main sections of the site.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 space-y-2 px-4 py-4">
            {mobileMenuItems.map((item) => {
              const isActive = "href" in item && pathname === item.href;

              return (
                <SheetClose
                  key={item.label}
                  nativeButton={"href" in item ? false : true}
                  render={
                    "href" in item ? (
                      <Link
                        href={item.href}
                        className={getItemClassName(isActive)}
                        onClick={() => handleNavItemSelect(item)}
                      />
                    ) : (
                      <button
                        type="button"
                        className={getItemClassName(false)}
                        onClick={handleUploadCvSelect}
                      />
                    )
                  }
                >
                  <span>{item.label}</span>
                  {"href" in item ? (
                    isActive ? (
                      <span className="text-xs font-medium text-primary">
                        Current
                      </span>
                    ) : (
                      <ArrowRight className="size-4 text-muted-foreground" />
                    )
                  ) : (
                    <ArrowRight className="size-4 text-muted-foreground" />
                  )}
                </SheetClose>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
