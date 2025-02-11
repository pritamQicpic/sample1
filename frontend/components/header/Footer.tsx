// components/footer/Footer.tsx
import { FC } from 'react'
import "../../styles/style.css"

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2025 SoftWare, All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
