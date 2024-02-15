"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const currentTheme = useTheme().theme;
  const toggleTheme = () => {
    return currentTheme === "light" ? "dark" : "light";
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(toggleTheme())}
      className={cn(
        "text-primary dark:dark:bg-cyan-50/50 rounded-full hover:bg-primary hover:text-accent")}
    >
      <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent align="end">
//     <DropdownMenuItem onClick={() => setTheme("light")}>
//       Light
//     </DropdownMenuItem>
//     <DropdownMenuItem onClick={() => setTheme("dark")}>
//       Dark
//     </DropdownMenuItem>
//     {/* <DropdownMenuItem onClick={() => setTheme("system")}>
//       System
//     </DropdownMenuItem> */}
//   </DropdownMenuContent>
// </DropdownMenu>
