import { IoMdInfinite, IoIosPeople } from "react-icons/io";
import { BsHouseFill } from "react-icons/bs";
import { MdOutlineSchedule } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const Menus = [
    { title: "Dashboard", icon: <BsHouseFill /> , link:'/dashboard'},
    { title: "Schedule", icon: <MdOutlineSchedule />, link: '/' },
    { title: "Faculty", icon: <GiTeacher />, link: '/facultylist' },
    { title: "Batches", icon: <IoIosPeople />, link: '/batchlist' },
    { title: "Logout", icon: <FiLogOut />, spacing: true },
  ];

  return (
    <div className="bg-primary h-screen p-5  flex flex-col items-center">
      <div className="flex items-center mb-8">
        <IoMdInfinite className="bg-slate-200 text-6xl rounded-full " />
      </div>
      <ul className="flex flex-col items-center mt-5 p-5 ">
        {Menus.map((menu, index) => (
          <Link to={menu.link} key={index}>
            <li className="text-white text-2xl flex items-center   cursor-pointer mt-16 relative h-10 w-10 group">
            <span className="text-4xl">
                {menu.icon}
              </span>
              <span className="absolute top-[-110%] left-1/2 transform -translate-x-1/2 bg-zinc-400 text-white py-1 px-2 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {menu.title}
              </span>
            </li>
          </Link>

        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

