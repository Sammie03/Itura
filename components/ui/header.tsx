import Image from 'next/image'
import Logo from '@/public/images/stethoscope_icon.png'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import './header.scss'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 logo-name-container">
            {/* Logo */}

            <Link href="/" className="block" aria-label="Itura" style={{display: 'flex', alignItems: 'center'}}>
            <Image  src={Logo} width={48} height={48} alt="logo" />
            <span className="business-name-container"> ITURA</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Home
                </Link>
              </li>
              <li>
                <Link
                  href="#aboutus"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#healthcares"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Health Cares
                </Link>
              </li>
              <li>
                <Link
                  href="#diettracker"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Diet Tracker
                </Link>
              </li>
                 <li>
                <Link
                  href="#communityportal"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Community Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#contactus"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                 Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
