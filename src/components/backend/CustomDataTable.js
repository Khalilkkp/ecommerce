'use client'
import React, { useState } from 'react'
import data from '@/app/data.json'
function CustomDataTable() {
    const page_size = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * page_size;
    const endIndex = startIndex + page_size;
    const currentDisplayeddata = data.slice(startIndex, endIndex);
    const numberOfPages = Math.ceil(data.length / page_size)
    const itemStartIndex = startIndex + 1;
    const itemEndIndex = Math.min(startIndex + page_size, data.length);
    function handlePageChange(page) {
        setCurrentPage(page)
    }

    return (
        <div >
            <div className='mt-4 flex justify-center items-center w-full bg-slate-200 rounded-lg p-3'>
                <h3 className='text-xl'>recent orders</h3> </div>
            {/* table  */}


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {/* <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> */}
                            <th scope="col" class="px-6 py-3">
                                Product id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                first name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                last name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* json data  */}
                        {
                            currentDisplayeddata.map((item, i) => {
                                return (

                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.first_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.last_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{item.gender}</a>
                                        </td>
                                    </tr>

                                )
                            })

                        }
                        {/* end json data  */}

                    </tbody>
                </table>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span class="font-semibold text-gray-900 dark:text-white">{data.length}</span></span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <button onClick={()=>handlePageChange(currentPage-1)}  disabled={currentPage == 1} class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                        </li>
                        
                     {Array.from({length: numberOfPages}, (_, index)=>{
                        return(
                            <li key={index}>
                            <button onClick={()=>setCurrentPage(index+1)} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index+1}</button>
                        </li>
                        )
                     })}
                           
                      
                       
                            <li>
                            <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage == 1} class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">next</button>
                        </li>
                        
                    </ul>
                </nav>
            </div>


            {/* end table  */}
        </div>
    )
}

export default CustomDataTable
