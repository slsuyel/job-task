import React, { useState } from "react";

const PaymentRecords = () => {
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const totalEarned = 0; // Total earnings
  const dailyEarnings = 0; // Daily earnings
  const paymentRecord = {
    orderId: "R1728045842535355",
    status: "অনিশ্চিত",
    amount: 300,
    date: "2024-10-04 18:44:02",
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (screenshot) {
      console.log("Uploaded Screenshot:", screenshot);
      alert("Screenshot uploaded successfully!");
      // Implement upload logic here
    } else {
      alert("Please select a screenshot to upload.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">পেমেন্ট রেকর্ডস</h1>

        {/* Total Earnings */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">ইতিমধ্যেই উপার্জন হয়েছে</p>
          <p className="text-gray-800 font-bold text-2xl">৳{totalEarned}</p>
        </div>

        {/* Daily Earnings */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">দৈনিক আয়</p>
          <p className="text-gray-800 font-bold text-2xl">৳{dailyEarnings}</p>
        </div>

        {/* Payment Record Details */}
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">অর্ডার নং: {paymentRecord.orderId}</p>
          <p className="text-gray-600">স্ট্যাটাস: {paymentRecord.status}</p>
          <p className="text-gray-600">দাম: ৳{paymentRecord.amount}</p>
          <p className="text-gray-500 text-sm">{paymentRecord.date}</p>
        </div>

        {/* Screenshot Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">স্ক্রিনশট আপলোড করুন:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleUpload}
            className="mt-2 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            আপলোড করুন
          </button>
        </div>

        {/* End Message */}
        <p className="text-center text-gray-500">—— শেষ ——</p>
      </div>
    </div>
  );
};

export default PaymentRecords;
