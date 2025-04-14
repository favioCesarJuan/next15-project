'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


interface Props {
  href: string
  title: string
}

export const NavLink = ({ href, title }: Props) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={`hover:text-black ${
        pathname === href ? "text-black" : "text-link-inactive"
      }`}
    >
      {title}
    </Link>
  )
}
