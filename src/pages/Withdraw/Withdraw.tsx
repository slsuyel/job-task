import  { useState } from "react";

const Withdraw = () => {
  const balance: number = 10; // Current balance
  const totalEarnings: number = 10; // Total earnings
  const minimumWithdrawal: number = 100; // Minimum withdrawal amount
  const [withdrawAmount, setWithdrawAmount] = useState<string>(""); // Handle input as a string

  const handleWithdraw = () => {
    const amountToWithdraw = parseFloat(withdrawAmount); // Convert the string to a number

    if (!isNaN(amountToWithdraw) && amountToWithdraw >= minimumWithdrawal && amountToWithdraw <= balance) {
      console.log("Withdraw Amount:", amountToWithdraw);
      alert(`You have successfully withdrawn ৳${amountToWithdraw}`);
      // Add logic to process the withdrawal
    } else {
      alert("Please enter a valid amount greater than or equal to ৳100.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">প্রত্যাহার করুন</h1>

        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">ভারসাম্য:</span>
            <span className="text-gray-800 font-bold">৳{balance}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">মোট আয়:</span>
            <span className="text-gray-800 font-bold">৳{totalEarnings}</span>
          </div>
        </div>

        <div className="text-gray-600 space-y-2 mb-4">
          <p>● প্রক্রিয়াকরণের সময়: 7×24h</p>
          <p>● ন্যূনতম প্রত্যাহার: ৳{minimumWithdrawal}</p>
          <p>● আগমনের সময়: 24 ঘণ্টার মধ্যে</p>
          <p>● ফি: কোনোটিই নয়</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            ন্যূনতম প্রত্যাহার: ৳{minimumWithdrawal}
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="আপনি যে পরিমাণ অর্থ উত্তোলন করতে চান তা টাইপ করুন"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleWithdraw}
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          এখনই প্রত্যাহার করুন
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
