import React from 'react';
import './CardHeader.css';
import FacultyCard from '../../utils/Data/FacultyCard';
import { FaGreaterThan } from 'react-icons/fa';

const CardHeader = () => {
  return (
    <nav className="bg-gray-100 mb-1">
      <div className="flex items-center h-24 px-4 border-b border-solid border-gray-400">

        <button className="bg-white hover:bg-gray-100 text-gray-800 text-2xl font-bold py-1 px-3 border border-gray-400 shadow">
          +
        </button>
        <section className="flex w-auto ml-4">
  {FacultyCard.map((item, index) => (
    <div class="flex flex-col items-center justify-center m-0 mx-1 p-1 box-border border bg-slate-300 border-gray-400" key={item.FacultyId}> 
      <img src={item.details.img} alt={item.details.name} className="faculty-card__image" />
      <span className="faculty-card__name">{item.details.name}</span>
    </div>
  ))}          
</section>
        <div className="ml-2">
          <FaGreaterThan className="fill-current text-red-600 ml-4" />
        </div>   

        <div className="flex ml-auto mr-3">
          <button className="bg-green-600 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <span className='ml-3'>Physics</span>

          <button className="bg-yellow-500 font-bold py-2 px-4 rounded inline-flex items-center ml-4">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <span className='ml-3'>Chemistry</span>

          <button className="bg-blue-900 font-bold py-2 px-4 rounded inline-flex items-center ml-4">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <span className='ml-3'>Maths</span>
        </div>
      </div>
    </nav>
  );
};

export default CardHeader;

