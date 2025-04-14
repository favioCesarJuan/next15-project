import { NavBar } from "@/components/NavBar/NavBar"


interface Props {
  title: string
  className?: string | undefined
}

export const Header = ({ title, className }: Props) => {
  return (
    <header className={`max-w-full  mx-main flex justify-between items-center ${className ? className : ""}`}>
          <h1 className="text-primary font-semibold text-5xl leading-7">{title}</h1>
          <NavBar />
    </header>
  )
}
