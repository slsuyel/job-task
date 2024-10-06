import React, { useState } from "react";

const AddBank = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountName && accountNumber && bankName) {
      console.log("Account Name:", accountName);
      console.log("Account Number:", accountNumber);
      console.log("Bank Name:", bankName);
      alert("Your bank details have been successfully submitted!");
    } else {
      alert("Please fill out all the fields correctly.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">ব্যাঙ্ক কার্ড বাঁধুন</h1>

        <p className="text-gray-600 mb-4">
          অনুগ্রহ করে সঠিকভাবে ব্যাঙ্ক অ্যাকাউন্টের তথ্য টাইপ করুন। তথ্য ত্রুটির কারণে মূলধন ক্ষতির জন্য আমরা দায়ী থাকব না।
        </p>
        <p className="text-gray-600 mb-4">
          আপনার ব্যাঙ্ক অ্যাকাউন্টে আপনার ব্যালেন্স তুলতে দয়া করে নীচে আপনার ব্যাঙ্কের বিবরণ লিখুন৷
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Account Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">অ্যাকাউন্টের নাম</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="আপনার অ্যাকাউন্টের নাম লিখুন"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">*অ্যাকাউন্ট নম্বর</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="আপনার অ্যাকাউন্ট নম্বর লিখুন"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Bank Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">ব্যাঙ্কের নাম</label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option disabled value={''}>অনুগ্রহ করে নির্বাচন করুন</option>
              <option value="Bkash">বিকাশ</option>
              <option value="Nagad">নগদ</option>
       
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBank;
