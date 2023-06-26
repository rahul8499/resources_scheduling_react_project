import React from 'react'
import { Link } from 'react-router-dom'

const TableHeader = ({ pagename }) => {
  return ( 
<nav class="flex container-schedule  h-[4rem] text-2xl bg-gray-100 box-border border-b  border-gray-400 border-solid" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3 ml-4 text-2xl">
    <Link to='/'>
    <li class="inline-flex items-center">
      <a  class="inline-flex items-centertext-2xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg aria-hidden="true" class="w-7 h-7 mr-2  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </a>
    </li>  
    </Link>
    <li aria-current="page">
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="ml-1text-2xl font-medium text-gray-500 md:ml-2 dark:text-gray-400">{pagename}</span>
      </div>
    </li>
  </ol>
</nav>

  )
}

export default TableHeader

