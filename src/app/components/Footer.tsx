import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
function Footer() {
  return (
    <div className="rounded-lg mt-32 text-center dark:bg-gray-800 bottom-0 w-full text-white">
    <div className="w-full mx-auto max-w-screen-xl p-4  md:items-center md:justify-center">
  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><RxGithubLogo />
  </span>
  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Read&Write DB™</a>. All Rights Reserved.
  </span>
</div>
</div>

  )
}

export default Footer
