import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'BANER', 'KOTHRUD', 'SWARGATE', 'HADAPSAR', 'VN', 'PCMC', 'APTE'
];

const FilterHeader = () => {
  const defaultOption = options[0];
  return (
    <header className="bg-gray-200 box-border border-b border-gray-400 border-solid">
      <div className="flex items-center justify-between">
        <div className="w-1/4 ml-6 mt-1">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="text-right flex items-center mr-6">
          <div className="text-gray-600">
            <h>Alex Roy</h>
          </div>
          <img
            className="w-14 h-14 rounded-full ml-4 mt-1 mb-1"
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            alt="User Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default FilterHeader;


// import { useState } from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const options = [
//   'BANER', 'KOTHRUD', 'SWARGATE', 'HADAPSAR', 'VN', 'PCMC', 'APTE'
// ];

// const FilterHeader = () => {
//   const defaultOption = options[0];
//   return (
//     <header className="bg-white  " >
//       <div className="container  ">
//         <div className="flex items-center justify-between">
//           <div className="w-1/4  ml-6 mt-1">
//             <Dropdown
//               options={options}
//               value={defaultOption}
//               placeholder="Select an option"
//             />
//           </div>
//           <div className="text-right  flex items-center  ">
//             <div className="text-gray-600 ">
//               <h>Alex Roy</h></div>
//             <img
//               className="w-14 h-14 rounded-full ml-4 mt-1 mb-1"
//               src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
//               alt="User Avatar"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default FilterHeader;
