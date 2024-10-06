
const Team = () => {
  const balance = 10; // Current balance
  const totalEarnings = 10; // Total earnings
  const referralRates = [
    { level: 1, percentage: 35, totalRecharge: 0, myCommission: 0 },
    { level: 2, percentage: 2, totalRecharge: 0, myCommission: 0 },
    { level: 3, percentage: 1, totalRecharge: 0, myCommission: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">আমার দল</h1>

        {/* Balance and Total Earnings */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">ভারসাম্য: ৳{balance}</p>
          <p className="text-gray-600">মোট আয়: ৳{totalEarnings}</p>
          <p className="text-gray-600">
            আপনি আপনার বোনাস হিসাবে আপনার লেভেল 1 রেফারেল রিচার্জের পরিমাণের 35%, লেভেল 2-এর 2%, এবং লেভেল 3-এর 1%, তারা পেমেন্ট করার পরপরই, রেজিস্ট্রেশনের পরিবর্তে পাবেন।
          </p>
        </div>

        {/* Referral Levels */}
        {referralRates.map((referral) => (
          <div key={referral.level} className="border-b pb-4 mb-4 shadow-md">
            <div className="bg-blue-600 rounded p-2 flex justify-between text-white">
                <h2 className="text-lg font-bold mb-2">রেফারেল - স্তর {referral.level}</h2>
                <p className=" text-green-400">বিস্তারিত দেখতে প্রবেশ করুন</p>
            </div>
            <div className="mt-2">
              <div className="flex justify-between">
                <span className="text-gray-600">রেফারেল (বৈধ/মোট):</span>
                <span className="text-gray-800 font-bold">{referral.totalRecharge}/0</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">মোট রিচার্জ:</span>
                <span className="text-gray-800 font-bold">৳{referral.totalRecharge}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">আমার কমিশন:</span>
                <span className="text-gray-800 font-bold">৳{referral.myCommission}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">আজ:</span>
                <span className="text-gray-800 font-bold">0/0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
