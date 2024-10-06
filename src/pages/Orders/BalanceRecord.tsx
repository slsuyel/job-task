
const BalanceRecord = () => {
  const balance = 10; // Current balance
  const balanceHistory = [
    {
      id: 1,
      description: 'সাইনআপ বোনাস',
      amount: 10,
      date: '2024-10-04 18:15:04',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">ব্যালেন্স রেকর্ড</h1>

        {/* Current Balance */}
        <div className="border-b pb-4 mb-4 bg-blue-500 p-3 rounded">
          <p className="text-white">আমার ব্যালেন্স</p>
          <p className=" text-white font-bold text-2xl">৳{balance}</p>
        </div>

        {/* Balance History */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">ব্যালেন্স রেকর্ড</h2>
          {balanceHistory.length > 0 ? (
            balanceHistory.map((record) => (
              <div key={record.id} className="border-b pb-4 mb-4">
                <p className="text-gray-600">{record.description}</p>
                <p className="text-green-500 font-bold">+৳{record.amount}</p>
                <p className="text-gray-500 text-sm">{record.date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">কোনো রেকর্ড পাওয়া যায়নি</p>
          )}
        </div>

        {/* End Message */}
        <p className="text-center text-gray-500">—— শেষ ——</p>
      </div>
    </div>
  );
};

export default BalanceRecord;
