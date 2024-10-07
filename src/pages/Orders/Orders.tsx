import Loader from "@/components/ui/Loader";
import { callApi } from "@/utils/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await callApi('GET', '/my-orders');
        setOrders(data.orders || [])
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchOrders();
  }, []); 

  if (loading) {
    return <Loader/>
  }

  console.log(orders);
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center">আমার আদেশ</h1>

        {/* Earnings and Daily Income */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">ইতিমধ্যেই উপার্জন হয়েছে:</span>
            <span className="text-gray-800 font-bold">৳{0}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">দৈনিক আয়:</span>
            <span className="text-gray-800 font-bold">৳{0}</span>
          </div>
        </div>

        {/* Informational Text */}
        <div className="text-gray-600 space-y-2">
          <p>● ক্রয় করার পর প্রতি 24 ঘন্টায় দৈনিক আয় আসে।</p>
          <p>● আয় সবসময় সরাসরি আপনার ব্যালেন্স যোগ করা হয়.</p>
          <p>● উপরে থাকা অবস্থায় নির্দ্বিধায় আপনার ব্যালেন্স তুলে নিন ৳100.</p>
          <p>● আপনার পণ্যের আয়ের দিন শেষ হয়ে যাবে।</p>
          <p>● একাধিক বা বিভিন্ন পণ্য একযোগে উপার্জন অনুমোদিত.</p>
        </div>

        {/* Withdraw Button */}
       <Link to={'/withdraw'}>
            <button className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              ব্যালেন্স তুলে নিন
            </button>
       </Link>
      </div>
    </div>
  );
};

export default Orders;
