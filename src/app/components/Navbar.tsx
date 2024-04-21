import React from 'react'

function Navbar() {
  return (
<header className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
  <div className="relative flex flex-wrap items-center gap-4">
    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
    </a>
    <div className="flex ml-auto lg:order-1">
      <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">Login</button>
    </div>
    <ul id="collapseMenu" className="lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:hidden max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[250px] max-lg:top-0 max-lg:left-0 max-lg:p-4 flex items-center justify-center max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-lg:z-50">
      <li className="max-lg:border-b max-lg:py-2 px-3">
        <a href="javascript:void(0)" className="lg:hover:text-blue-600 text-blue-600 block font-bold transition-all">Home</a>
      </li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><a href="javascript:void(0)" className="lg:hover:text-blue-600 block font-bold transition-all">Team</a>
      </li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><a href="javascript:void(0)" className="lg:hover:text-blue-600 block font-bold transition-all">Feature</a>
      </li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><a href="javascript:void(0)" className="lg:hover:text-blue-600 block font-bold transition-all">Blog</a>
      </li>
      <li className="max-lg:border-b max-lg:py-2 px-3"><a href="javascript:void(0)" className="lg:hover:text-blue-600 block font-bold transition-all">About</a>
      </li>
    </ul>
  </div>
</header>

  )
}

export default Navbar
