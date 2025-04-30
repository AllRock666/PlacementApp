import Link from "next/link"
import { GraduationCap } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <GraduationCap className="h-5 w-5" />
      </div>
      <span
        className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent`}
      >
        KIT Nexus
      </span>
    </Link>
  )
}
