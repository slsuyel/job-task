import { ClipboardListIcon, HomeIcon, UserIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router-dom"; 
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
      <div className="flex justify-around py-2">
        {/* Home Link */}
        <Link to="/home" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-blue-600" />
          <span className="text-xs mt-1">হোম পেজ</span>
        </Link>

        {/* My Orders Link */}
        <Link to="/orders" className="flex flex-col items-center">
          <ClipboardListIcon className="h-6 w-6 text-gray-400" />
          <span className="text-xs mt-1">আমার আদেশ</span>
        </Link>

        {/* Team Link */}
        <Link to="/team" className="flex flex-col items-center">
          <UsersIcon className="h-6 w-6 text-gray-400" />
          <span className="text-xs mt-1">দল</span>
        </Link>

        {/* Profile Link */}
        <Link to="/profile" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6 text-gray-400" />
          <span className="text-xs mt-1">আমার</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
