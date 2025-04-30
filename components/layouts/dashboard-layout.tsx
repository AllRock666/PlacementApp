"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Bell,
  Building2,
  Calendar,
  ChevronDown,
  FileText,
  GraduationCap,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { Logo } from "@/components/custom/logo"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"
import { toast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "faculty" | "student"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [messages, setMessages] = useState(2)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const adminNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: Home,
    },
    {
      title: "Companies",
      href: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      title: "Students",
      href: "/dashboard/admin/students",
      icon: GraduationCap,
    },
    {
      title: "Reports",
      href: "/dashboard/admin/reports",
      icon: BarChart3,
    },
    {
      title: "Events",
      href: "/dashboard/admin/events",
      icon: Calendar,
    },
    {
      title: "Profile",
      href: "/dashboard/admin/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ]

  const facultyNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/faculty",
      icon: Home,
    },
    {
      title: "Students",
      href: "/dashboard/faculty/students",
      icon: GraduationCap,
    },
    {
      title: "Results",
      href: "/dashboard/faculty/results",
      icon: FileText,
    },
    {
      title: "Companies",
      href: "/dashboard/faculty/companies",
      icon: Building2,
    },
    {
      title: "Attendance",
      href: "/dashboard/faculty/attendance",
      icon: Calendar,
    },
    {
      title: "Profile",
      href: "/dashboard/faculty/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/faculty/settings",
      icon: Settings,
    },
  ]

  const studentNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard/student",
      icon: Home,
    },
    {
      title: "Profile",
      href: "/dashboard/student/profile",
      icon: User,
    },
    {
      title: "Results",
      href: "/dashboard/student/results",
      icon: FileText,
    },
    {
      title: "Companies",
      href: "/dashboard/student/companies",
      icon: Building2,
    },
    {
      title: "Attendance",
      href: "/dashboard/student/attendance",
      icon: Calendar,
    },
    {
      title: "Settings",
      href: "/dashboard/student/settings",
      icon: Settings,
    },
  ]

  const navItems = role === "admin" ? adminNavItems : role === "faculty" ? facultyNavItems : studentNavItems

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been successfully logged out.",
    })
    router.push("/login")
  }

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: `You have ${notifications} unread notifications.`,
    })
    setNotifications(0)
  }

  const handleMessageClick = () => {
    toast({
      title: "Messages",
      description: `You have ${messages} unread messages.`,
    })
    setMessages(0)
  }

  const NavItems = () => (
    <>
      <div className="flex flex-col gap-1 py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? "nav-item-active" : "nav-item-inactive"}`}
            onClick={() => setOpen(false)}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start px-3 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </>
  )

  const userName = role === "admin" ? "Mr. Amit Sarkar" : role === "faculty" ? "Prof. Jane Doe" : "John Smith"

  const userRole = role === "admin" ? "TPO" : role === "faculty" ? "TNP Coordinator" : "CSE - 3rd Year"

  const userAvatar =
    role === "admin" ? "/avatars/admin.jpg" : role === "faculty" ? "/avatars/faculty.jpg" : "/avatars/student.jpg"

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"></div>
          <p className="text-sm text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6 shadow-sm">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Logo />
              <div className="mt-8 flex flex-col gap-6 h-full">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>
        <div className="hidden md:flex">
          <Logo />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" onClick={handleNotificationClick}>
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {notifications}
                    </span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" onClick={handleMessageClick}>
                  <MessageSquare className="h-5 w-5" />
                  {messages > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-xs text-white">
                      {messages}
                    </span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Messages</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex items-center gap-2 rounded-full">
                <Avatar className="h-8 w-8 border-2 border-brand-light">
                  <AvatarImage src={userAvatar || "/placeholder.svg"} alt="User" />
                  <AvatarFallback className="bg-brand-primary text-white">
                    {role === "admin" ? "A" : role === "faculty" ? "F" : "S"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">{userRole}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userRole}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${role}/profile`}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/${role}/settings`}>Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-white md:flex">
          <div className="flex flex-col gap-6 p-4 h-full">
            <NavItems />
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 animate-fade-in">{children}</main>
      </div>
    </div>
  )
}
