import * as React from "react"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"

const Toast = React.forwardRef(({ className, variant = "default", title, description, onClose, ...props }, ref) => {
  const variants = {
    default: "bg-slate-800 border-slate-700 text-white",
    success: "bg-green-600 border-green-700 text-white",
    error: "bg-red-600 border-red-700 text-white",
    warning: "bg-yellow-600 border-yellow-700 text-white",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
        className || variants[variant] // Use className if provided, otherwise use variant
      )}
      {...props}
    >
      <div className="grid gap-1 flex-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-md p-1 text-white/70 opacity-0 transition-opacity hover:text-white group-hover:opacity-100"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
})

Toast.displayName = "Toast"

export { Toast }
