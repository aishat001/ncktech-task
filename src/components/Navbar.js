import React from "react";
import logo from '../assets/logo_sig.png'
import avatar from '../assets/cardiB.jpg'


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
      <nav className="relative flex items-center justify-between pt-4 px-5 md:px-10 fixed bg-white dark:bg-primary">
        <div className="w-full mx-auto flex flex-wrap items-center justify-center lg:justify-between">
          <div className="w-full relative flex lg:w-auto lg:static lg:block justify-start items-center">
            <a
              className="text-sm font-bold font-ranchers logo-color leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#home"
            >                    <img src={logo} alt="logo" className="w-20 h-8"/>
            </a>
            <button
              className=" cursor-pointer text-xl leading-none block lg:hidden outline focus:outline-none ml-auto mr-3"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <MenuAlt3Icon/> */}
            </button>
            <div className="avatr-container w-8 h-8 md:w-12 md:h-12 rounded-full lg:hidden">
                <img src={avatar} alt="user-avatar" className="rounded-full"/>
            </div>
          </div>
          <div
            className={
              "flex-col items-start lg:flex-row lg:flex flex-grow lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-grey">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                  href="#about"
                >TRIPS</a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                  href="#projects"
                >RECENTLY VIEWED</a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                  href="#contact"
                >BOOKINGS </a>
              </li>
            </ul>
            <div className="avatr-container w-8 h-8 md:w-12 md:h-12 rounded-full hidden lg:flex">
                <img src={avatar} alt="user-avatar" className="rounded-full"/>
            </div>
          </div>

        </div>
      </nav>
  );
}