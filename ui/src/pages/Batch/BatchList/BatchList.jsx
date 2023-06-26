import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { IoEyeSharp } from "react-icons/io5";
import Search from '../../../components/Search/Search'
import TableHeader from '../../../components/TableHeader/TableHeader';

const BatchList = (props) => {
  return (
    <div>
      <section>  {/* header */}
      
        <TableHeader pagename="Batch Details"/>
      </section>  {/* searcy */}
      <Search />
      <section>
        <div className="container-two flex  h-auto  bg-white box-border border-b border-gray-400 border-solid "> {/* list container */}
          <div class=" overflow-x-auto ">
            <div >
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div >
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">S.N</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Batch code</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Batch Type</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Location</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Date</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Duration</th>
                        <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Action</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">1.</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Nurture PH-1 BJNMM</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">nurture</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">Baner</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">10-02-2023</td>
                        <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">6 Months</td>
                        <td class=" px-16 py-7 whitespace-nowrap  text-sm font-medium text-center ">

                          <button
                            onClick={() => {
                              props.editRow();
                            }}
                            className="button muted-button"
                          >
                            <AiFillEdit class="text-2xl mr-3 text-green-700" />
                          </button> 
                           <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3" /></button> 
                           <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button> 
 
                          </td>
                      </tr>


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default BatchList