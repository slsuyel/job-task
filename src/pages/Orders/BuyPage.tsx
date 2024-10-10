import { callApi } from '@/utils/functions';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const BuyPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const price = location.state?.price;
  const navigate = useNavigate();

  const [paymentChannel, setPaymentChannel] = useState<string>('');
  const [senderAccount, setSenderAccount] = useState<string>('');
  const [transactionId, setTransactionId] = useState<string>('');

  const paymentOptions: { [key: string]: string } = {
    bkash: '01712345678',
    nagad: '01787654321',
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPaymentChannel(e.target.value);
  };

  const data = {
    product_id: id,
    channel: paymentChannel,
    send_account: senderAccount,
    trx_id: transactionId,
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await callApi('POST', '/submit-payment', data);
      // If the response is successful
      if (res.message === 'Payment submitted successfully') {
        // Show success alert
        Swal.fire({
          title: 'Success!',
          text: 'Payment submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/profile');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: res.message || 'Failed to submit payment.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error submitting payment:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }

    console.log(data);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">পেমেন্ট বিস্তারিত</h2>

        <p className="text-gray-700 mb-4">
          পরিমাণ: <strong>{price} টাকা</strong>
        </p>

        <label className="block mb-2 text-sm font-medium text-gray-900">
          পেমেন্ট চ্যানেল নির্বাচন করুন
        </label>
        <select
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={paymentChannel}
          onChange={handlePaymentChange}
        >
          <option value="">পেমেন্ট চ্যানেল নির্বাচন করুন</option>
          <option value="bkash">bKash</option>
          <option value="nagad">Nagad</option>
        </select>

        {paymentChannel && (
          <div className="bg-green-100 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold">পেমেন্ট নির্দেশাবলী:</h3>
            <p className="mt-2">
              উপকারভোগী অ্যাকাউন্ট নম্বর:{' '}
              <strong>{paymentOptions[paymentChannel]}</strong>
            </p>
            <p className="mt-2">
              পরিমাণ: <strong>{price} টাকা</strong>
            </p>
            <p className="mt-2">
              ধাপ ১: {paymentChannel} এর মাধ্যমে অর্থ স্থানান্তর করুন।
            </p>
            <p className="mt-2">
              ধাপ ২: অর্থপ্রদানের পরে আপনার <strong>লেনদেন আইডি</strong> অনুলিপি
              করুন।
            </p>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4">
          দয়া করে নিশ্চিত করুন যে স্থানান্তর করা ওয়ালেট নম্বর রিচার্জ নম্বরের
          সাথে সামঞ্জস্যপূর্ণ। যদি আপনি ভুল নম্বরে রিচার্জ করেন, তাহলে আপনি
          নিজেই ক্ষতির জন্য দায়ী হবেন।
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <h2 className="text-lg font-semibold mb-4">পেমেন্ট নিশ্চিতকরণ</h2>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            প্রেরক bKash/Nagad অ্যাকাউন্ট
          </label>
          <input
            type="text"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
            placeholder="প্রেরক অ্যাকাউন্ট নম্বর"
            value={senderAccount}
            onChange={e => setSenderAccount(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm font-medium text-gray-900">
            লেনদেন আইডি
          </label>
          <input
            type="text"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
            placeholder="লেনদেন আইডি"
            value={transactionId}
            onChange={e => setTransactionId(e.target.value)}
            required
          />

          <button
            className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            জমা দিন
          </button>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default BuyPage;
