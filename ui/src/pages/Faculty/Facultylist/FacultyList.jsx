
import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { IoEyeSharp } from "react-icons/io5";
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import TableHeader from '../../../components/TableHeader/TableHeader';
import './faculty.css'
import { Link } from 'react-router-dom';



const FacultyList = (props) => {
 const [currentPage, setCurrentPage] = useState(1);
 const [limit, setLimit] = useState(6);
 const [totalRecords, setTotalRecords] = useState('');
 const [facultyData, setFacultyData] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const noOfpage= totalRecords/ limit;

 const handleChange = (e) => {
  setSearchTerm(e.target.value);
 };

 const facultyApiData = async () => { 
  const url = `http://dev.allen-api.com:5020/api/getfacultydata?q=${searchTerm}&limit=${limit}&page=${currentPage}&gender=&sortBy=gender&sortOrder=ASC`;
  try {
   const response = await axios.get(url);
//    console.log(response)
   const { data, total } = response.data;
   setFacultyData(data);
   setTotalRecords(total);
  } catch (error) {
   console.error('Error fetching faculty data:', error);
  }
 }

 const handlePageChange = ({ selected }) => {
  setCurrentPage(selected + 1);
 };

 useEffect(() => {
  facultyApiData();
 }, [searchTerm,currentPage]);

 return (
  <div>
   <section>
    <TableHeader pagename="Faculty" />
   </section>

   <div className="w-full md:w-1/2 px-6 p-2 md:mb-0">
    <div className=" flex">
    <input
     value={searchTerm}
     onChange={handleChange}
     className="w-[40rem] bg-white border border-gray-500 m-1 py-2 px-4 focus:outline-none mt-3 ml-1"
     placeholder="Search....."
    />

<Link to='/facultycreate' > 
<button
              type="button"
              className="bg-gray-500  w-[7rem] mt-3   text-center py-2 m-1   px-4  text-xl justify-center font-medium text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

            >
              Add
            </button>
            </Link> 
            </div>
   </div>

   <section>
    <div className=" overflow-x-auto" >
     <div class="p-1.5 min-w-full inline-block align-middle">
      <div style={{ height: "65vh" }} className="bg-white">
       <table class="min-w-full divide-y divide-gray-400 dark:divide-gray-700">
        <thead>
         <tr class="bg-slate-100">
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">First_Name</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Email</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Phone</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Subject</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Experience</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Location</th>
          <th scope="col" class="px-16 py-7 whitespace-nowrap text-sm font-bold text-primary dark:text-gray-200">Action</th>
         </tr>
        </thead>
        <tbody class="divide-y divide-gray-400 dark:divide-gray-700">
         {facultyData.map((item, i) => {
          return (
           <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">{item.first_name}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{item.mail}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{item.phone}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{item.subject}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{item.experience}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{item.locationName
}</td>
            <td class="px-16 py-7 whitespace-nowrap text-sm font-medium text-center">
            <button
                          onClick={() => {
                            props.editRow();
                          }}
                          className="button muted-button"
                        >
                          <AiFillEdit class="text-2xl mr-3 text-green-700" />
                        </button>
                        <button onClick={() => props.deleteUser()}><RiDeleteBin6Line class=" text-red-700 text-2xl mr-3 " /></button>
                        <button> <IoEyeSharp class="text-blue-900 text-2xl mr-3" /></button>

                          {/* <button class="bg-blue-800 hover:bg-blue-900 text-white font-bold mr-2 py-2 px-7 rounded">Edit</button>
                          <button class="bg-green-800 hover:bg-green-900 text-white font-bold mr-2 py-2 px-7 rounded">View</button>
                          <button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-7 mr-2 rounded">Delete</button>  */}
            </td>
           </tr>
          )
         })}
        </tbody>
       </table>
      </div>
     </div>
    </div>

    <div>
     <div  >
      <ReactPaginate
       previousLabel= "<"
       nextLabel= ">"
       breakLabel="..."
       pageCount={noOfpage}
       marginPagesDisplayed={2}
       pageRangeDisplayed={2}
       onPageChange={handlePageChange}
       containerClassName={"pagination"}
       previousLinkClassName={"pagination__link"}
       nextLinkClassName={"pagination__link"}
       disabledClassName={"pagination__link--disabled"}
       activeClassName={"pagination__link--active"}
      //  containerClassName="pagination"
      //  activeClassName="active"
      //  pageClassName="page-item"
      //  pageLinkClassName="page-link"
      //  previousClassName="page-item"
      //  nextClassName="page-item"
      //  previousLinkClassName="page-link"
      //  nextLinkClassName="page-link"
      //  breakClassName="page-item"
      //  breakLinkClassName="page-link"
      />
     </div>
    </div>
   </section>
  </div>
 )
}

export default FacultyList;