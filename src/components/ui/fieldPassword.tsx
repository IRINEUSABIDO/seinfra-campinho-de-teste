import * as React from "react";
import { useId, useState } from "react";

import EyeIcon from "../../assets/IconsNewSvgs/passwordShow.svg";
import EyeIconOff from "../../assets/IconsNewSvgs/passwordHide.svg";

import { cn } from "./../../lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [isVisible, setIsVisible] = useState(false);

  const id = useId();

  return (
    <div>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "max-w-[600px] text-red-800 file:text-foreground  placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-2 w-full min-w-0 rounded-none bg-transparent px-4 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-seinfra-blue-100",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      <div>
        <button
          type="button"
          onClick={() => setIsVisible((prevState) => !prevState)}
          className="absolute right-3 top-1/2 -translate-y-1/2 outline-none"
        >
          <img
            src={isVisible ? EyeIcon : EyeIconOff}
            alt={isVisible ? "mostrar a senha" : "esconder a senha"}
            className="w-[25px] m-[2px] cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export { Input };
