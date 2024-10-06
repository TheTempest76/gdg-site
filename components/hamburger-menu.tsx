'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
const navItems = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Core Team" },
  { href: "#Gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold"><Link href="/" className="flex items-center space-x-2 py-3">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">GDG</span>
        </Link></h2>
          
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}