import { cn } from "@/lib/utils"

const getButtonClasses = (variant, size) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
    destructive: "bg-destructive text-white hover:bg-destructive/90 shadow",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-8",
    icon: "h-9 w-9",
  }

  return cn(baseClasses, variantClasses[variant] || variantClasses.default, sizeClasses[size] || sizeClasses.default)
}

function Button({ className, variant = "default", size = "default", ...props }) {
  return <button className={cn(getButtonClasses(variant, size), className)} {...props} />
}

export { Button }
