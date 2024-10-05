import Marquee from 'react-fast-marquee';
import { Bell } from 'lucide-react'; 

const Notice = () => {
  return (
    <div className=" my-4 border border-gray-300 p-4 bg-gray-100  rounded-lg flex items-center">
      {/* Icon from lucide-react */}
      <Bell className="mr-2 text-yellow-500" />
      {/* Marquee for scrolling notice */}
      <Marquee speed={50} gradient={false}>
        <span>This is a scrolling notice! Stay tuned for updates! | </span>
        <span>Don't miss our upcoming sale on all items! | </span>
        <span>New arrivals are here! Check out our latest collection! | </span>
        <span>Subscribe to our newsletter for exclusive offers! | </span>
      </Marquee>
    </div>
  );
};

export default Notice;
