
import { ClipboardListIcon, HomeIcon, UserIcon, UsersIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
    <div className="flex justify-around py-2 bg-black">
      <div className="flex flex-col items-center">
        <HomeIcon className="h-6 w-6 text-blue-600" />
        <span className="text-xs mt-1">হোম পেজ</span>
      </div>
      <div className="flex flex-col items-center">
        <ClipboardListIcon className="h-6 w-6 text-gray-400" />
        <span className="text-xs mt-1">আমার আদেশ</span>
      </div>
      <div className="flex flex-col items-center">
        <UsersIcon className="h-6 w-6 text-gray-400" />
        <span className="text-xs mt-1">দল</span>
      </div>
      <div className="flex flex-col items-center">
        <UserIcon className="h-6 w-6 text-gray-400" />
        <span className="text-xs mt-1">আমার</span>
      </div>
    </div>
  </div>
  );
};

export default Footer;