import React from 'react'
import Link from 'next/link'
function NewNavBar() {

    const navigationLinks = [
        { name: 'Home', href: '/' },
        { name: 'Databases', href: '/databases' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Our Team', href: '/our-team' },
        { name: 'Products', href: '/products' },
        { name: 'Employees', href: '/employees' },
        { name: 'New Product', href: '/create-product' },
        { name: 'Update Product', href: '/update-product' },
      ]



  return (
<nav className="border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://readymadeui.com/readymadeui.svg" className="h-8" alt="Flowbite Logo" />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CRUD Databases</span> */}
    </a>
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
      </button>
      <div className="flex ml-auto lg:order-1">
      <button className="px-4 py-3 mx-1 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">Login</button>
      <button className="px-4 py-3 mx-1 rounded-xl text-white bg-red-600 transition-all hover:bg-cyan-800">Logout</button>
    </div>
      {/* Dropdown menu */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navigationLinks.map((link) => (
        <li>
            <Link href={link.href}>
                <div className="block py-2 px-3 text-white bg-cyan-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                {link.name}
                </div>
            </Link>
        </li>
        ))}

      </ul>
    </div>
  </div>
  
</nav>

  )
}

export default NewNavBar