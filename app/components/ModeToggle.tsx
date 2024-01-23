"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const currentTheme = useTheme().theme;
  const toggleTheme = () => {
    return currentTheme === "light" ? "dark" : "light";
  };

  // console.log("currentTheme: ", currentTheme);
  // console.log("toggleTheme: ", toggleTheme());

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(toggleTheme())}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
