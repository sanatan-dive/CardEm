import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";  // Use useLocation for active route detection

// Define the prop interface to expect setIsSidebarOpen
interface SidebarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();  // Hook to get the current route location

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsSidebarOpen(!isOpen); // Pass the updated state to the parent (App.tsx)
  };

  // Helper function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative flex">
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-stone-900 text-white h-screen fixed top-0 left-0 z-50 transition-all duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 bg-blue-500 p-2 rounded-md hover:bg-stone-600 focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <ul className="mt-16"> {/* Added margin-top to avoid overlap with the button */}
          <Link to="/">
            <li
              className={`p-4 ${isOpen ? 'block' : 'hidden'} ${isActive('/') ? 'bg-stone-500' : ''} hover:bg-stone-700 cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link to="/rules">
            <li
              className={`p-4 ${isOpen ? 'block' : 'hidden'} ${isActive('/rules') ? 'bg-stone-500' : ''} hover:bg-stone-700 cursor-pointer`}
            >
              Rules
            </li>
          </Link>
          <Link to="/game">
            <li
              className={`p-4 ${isOpen ? 'block' : 'hidden'} ${isActive('/game') ? 'bg-stone-500' : ''} hover:bg-stone-700 cursor-pointer`}
            >
              Play Offline
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
