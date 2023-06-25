import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  search?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, search, ...props }, ref) => {
  return (
    <div className={cn("relative", className)}>
      <input
        type={type}
        className={cn(
          "flex h-full w-full rounded-md border border-input bg-transparent px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          search && "pl-10" // Add left padding if search prop is true
        )}
        ref={ref}
        {...props}
      />
      {search && (
        <SearchIcon className="pointer-events-none absolute left-3 top-2/4 -translate-y-2/4 text-gray-500" />
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };

