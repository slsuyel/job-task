
const Profile = () => {
  const userId = "1722597565";
  const balance = 10;
  const totalRevenue = 10;
  const teamBenefits = 0;
  const dailyEarnings = 0;
  const referralLink = "https://example.com/referral-link";

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">Profile</h1>

        {/* User ID and Balance */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">ID: {userId}</p>
          <p className="text-gray-800 font-bold">ভারসাম্য: ৳{balance}</p>
        </div>

        {/* Revenue and Team Benefits */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">মোট রাজস্ব:</span>
            <span className="text-gray-800 font-bold">৳{totalRevenue}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">দলের সুবিধা:</span>
            <span className="text-gray-800 font-bold">৳{teamBenefits}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">দৈনিক আয়:</span>
            <span className="text-gray-800 font-bold">৳{dailyEarnings}</span>
          </div>
        </div>

        {/* Referral Link */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">আমার রেফারেল লিঙ্ক:</p>
          <a
            href={referralLink}
            className="text-blue-500 hover:underline break-words"
          >
            {referralLink}
          </a>
        </div>

        {/* Profile Actions */}
        <div className="space-y-4">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            আমার দল
          </button>
          <button className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
            প্রত্যাহার করুন
          </button>
          <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300">
            ব্যাঙ্ক কার্ড বাঁধুন
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            ব্যালেন্স রেকর্ড
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            পেমেন্ট রেকর্ড
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            আমার আদেশ
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            কাস্টমার সাপোর্ট
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            আমাদের সম্পর্কে
          </button>
          <button className="w-full py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300">
            প্রশ্ন
          </button>
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
            লগ আউট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
