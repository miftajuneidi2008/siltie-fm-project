"use client"
import { navData } from '@/lib/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Live from './Live'

const Links = () => {
    const path = usePathname()
  return (
    <div className="flex gap-6 items-center">
      {navData.map((link) => (
        <Link
          href={link.to}
          className={cn(
            "border-black transition-all duration-300 ease-in-out hover:border-b-2",
            path === link.to && "font-semibold"
          )}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
     <Live />
    </div>
  );
}

export default Links


    