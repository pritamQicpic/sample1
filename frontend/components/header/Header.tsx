// components/header/Header.tsx
import { FC } from 'react'
import Link from 'next/link'
import "../../styles/style.css"


const Header: FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Logo</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
            <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link href="/auth/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link href="/auth/signup" className="hover:text-gray-300">SignUp</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
