import * as React from "react"

import { cn } from "./../../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-seinfra-blue-light-700 placeholder:text-muted-foreground font-medium dark:bg-input/30 w-[90vw] max-w-[600px] min-w-0 rounded-4xl border-2 border-seinfra-blue-light-200 bg-transparent px-4 py-4 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-semibold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-seinfra-blue-100",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
