import React from 'react'
import ReactDOM from 'react-dom';
import './CalenderHeader.css';
import { DateRangePicker } from 'rsuite';
import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';



const predefinedRanges = [
    {
        label: 'Today',
        value: [new Date(), new Date()],
        placement: 'left'
    },
    {
        label: 'Yesterday',
        value: [addDays(new Date(), -1), addDays(new Date(), -1)],
        placement: 'left'
    },
    {
        label: 'This week',
        value: [startOfWeek(new Date()), endOfWeek(new Date())],
        placement: 'left'
    },
    {
        label: 'Last 7 days',
        value: [subDays(new Date(), 6), new Date()],
        placement: 'left'
    },
    {
        label: 'Last 30 days',
        value: [subDays(new Date(), 29), new Date()],
        placement: 'left'
    },
    {
        label: 'This month',
        value: [startOfMonth(new Date()), new Date()],
        placement: 'left'
    },
    {
        label: 'Last month',
        value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
        placement: 'left'
    },
    {
        label: 'This year',
        value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
        placement: 'left'
    },
    {
        label: 'Last year',
        value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
        placement: 'left'
    },
    {
        label: 'All time',
        value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
        placement: 'left'
    },
    {
        label: 'Last week',
        closeOverlay: false,
        value: value => {
            const [start = new Date()] = value || [];
            return [
                addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
                addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
            ];
        },
        appearance: 'default'
    },
    {
        label: 'Next week',
        closeOverlay: false,
        value: value => {
            const [start = new Date()] = value || [];
            return [
                addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
                addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
            ];
        },
        appearance: 'default'
    }
];

const CalenderHeader = () => {
    return (
      <nav className="bg-gray-100">
        <div className="flex items-center h-14 px-4 box-border border-b border-gray-400 border-solid relative">
  
          <DateRangePicker
            ranges={predefinedRanges}
            showOneCalendar
            placeholder="Calendar"
            style={{ width: 300 }}
          />
  
          <div className="absolute right-7 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 md:px-4 inline-flex items-center">
              <svg className="w-4 h-4 md:w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span className="hidden md:inline-block">Save</span>
            </button>
  
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 md:px-4 inline-flex items-center">
              <svg className="w-4 h-4 md:w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6l6 6m0 0l-6 6m6-6H6"></path>
</svg>

              <span className="hidden md:inline-block">Export</span>
            </button>
          </div>
  
        </div>
      </nav>
    );
  };
  
  export default CalenderHeader;
  