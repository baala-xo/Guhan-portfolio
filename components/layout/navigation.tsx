"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
  ]

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        scrolled ? "bg-background/90 border-b border-border shadow-md h-16" : "bg-background/50 h-20"
      )}
    >
      <div className="container-custom flex items-center justify-between h-full">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2 font-playfair text-2xl font-bold tracking-tight">
        <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
  <div className="bg-background rounded-full w-full h-full p-[2px]">
    <Image
      src="/pfp-2.jpeg"
      alt="Profile"
      width={40}
      height={40}
      className="rounded-full object-cover w-full h-full"
    />
  </div>
</div>

  <span>
    Ro<span className="text-primary">Y</span>
  </span>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "link-underline text-lg transition-colors",
                pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 p-6">
          <nav className="flex flex-col space-y-6 text-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-2xl py-2 transition-colors",
                  pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
