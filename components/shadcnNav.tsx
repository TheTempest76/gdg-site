"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import HamburgerMenu from "./hamburger-menu"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
export function MainNav() {
  const pathname = usePathname()

  return (
    <>
      <div className="relative flex md:hidden w-full items-center">
        <span className="absolute left-0 pl-4 "><HamburgerMenu/></span>
        <div className="flex justify-center w-full">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">GDG</span>
          </Link>
        </div>
      </div>

      <div className="mr-4 hidden md:flex ">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold lg:inline-block">GDG</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="#about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "#about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </Link>
          <Link
            href="#team"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("#team")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Core Team
          </Link>
          <Link
            href="#gallery"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("#gallery")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("#contact")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}