"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "./icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
            GDG
        </span>

      </Link>

      
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
         About
        </Link>
        <Link
          href="/core-team"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/core-team")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Core Team
        </Link>
        <Link
          href="/News"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/News") 
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          News 
        </Link>
        <Link
          href="/Projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Projects")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        <Link
          href="/join-us"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/join-us")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Join Us
        </Link>
      
      </nav>
    </div>
  )
}