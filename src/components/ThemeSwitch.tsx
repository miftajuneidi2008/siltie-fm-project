"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>Loading...</p>;

  if (resolvedTheme === "dark") {
    return <Sun onClick={() => setTheme("light")} className="cursor-pointer" />;
  }

  if (resolvedTheme === "light") {
    return <Moon onClick={() => setTheme("dark")} className="cursor-pointer" />;
  }
}
