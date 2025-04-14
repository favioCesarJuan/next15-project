import Link from "next/link"
import { NavLink } from "../NavLink/Link"

export const Nav = () => {
  return (
    <nav className="flex gap-4">
      <NavLink href={"/"} title="Home" />
      <NavLink href={"/product"} title="Product" />
      <NavLink href={"/faq"} title="FAQ" />
      <NavLink href={"/about"} title="About Us" />
    </nav>
  )
}
