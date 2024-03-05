import { ReactNode } from "react"
import { Navbar } from "../Navbar";
import Link from "next/link";

interface Props {
  children: ReactNode | ReactNode[];
}

export const LayoutNavigation = ({ children }: Props) => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section>
        <Navbar />
        { children }
      </section>
      <footer className="py-2 flex justify-center">
        <Link href="https://alienstudio.com.ve/" target="_blank" className="text-center text-default-500">
          Power by <span className="text-green-500">Alien Studio</span>
        </Link>
      </footer>
    </main>
  )
}
