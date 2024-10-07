import { ClipboardListIcon, HomeIcon, UserIcon, UsersIcon } from "lucide-react";
import { NavLink } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
      <div className="flex justify-around py-2">
        {/* Home Link */}
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`
          }
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">হোম পেজ</span>
        </NavLink>

        {/* My Orders Link */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`
          }
        >
          <ClipboardListIcon className="h-6 w-6" />
          <span className="text-xs mt-1">আমার আদেশ</span>
        </NavLink>

        {/* Team Link */}
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`
          }
        >
          <UsersIcon className="h-6 w-6" />
          <span className="text-xs mt-1">দল</span>
        </NavLink>

        {/* Profile Link */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`
          }
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">আমার</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
