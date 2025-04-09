"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Darius Leung" />
            <AvatarFallback className="bg-primary text-primary-foreground">DL</AvatarFallback>
          </Avatar>
          <Link href="/" className="text-xl font-bold text-primary">
            Darius Leung
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={pathname === item.path ? "secondary" : "ghost"}
              asChild
              className={cn("font-medium", pathname === item.path && "font-bold")}
            >
              <Link href={item.path}>{item.name}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center">
          <ModeToggle />
          <Button variant="outline" size="icon" className="md:hidden ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
