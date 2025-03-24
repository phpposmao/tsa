import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function PrimaryButton({ children, className, ...props }: PrimaryButtonProps) {
  return (
    <Button
      className={cn(
        "bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-sm tracking-widest font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

