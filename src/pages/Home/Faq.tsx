import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Store questions and answers in an array
  const faqData = [
    {
      question: "কিভাবে অর্থ উপার্জন করতে?",
      answer: (
        <>
          <h4 className="font-semibold text-blue-600">বিনিয়োগ করে অর্থ উপার্জন করুন</h4>
          <p>
            শুধুমাত্র আপনার আঙ্গুলগুলি সরান এবং আপনার বিনিয়োগে দুর্দান্ত রিটার্ন পান! ক্রয় করার জন্য হোমপেজে যেকোন পণ্য নির্বাচন করুন এবং এর দৈনিক রিটার্নের জন্য অপেক্ষা করুন, আপনার ব্যালেন্স 100 টাকার বেশি হলে আপনি যে কোনো সময় এটি তুলতে পারবেন।
          </p>
          <h4 className="font-semibold text-blue-600">সুপারিশ করে অর্থ উপার্জন করুন</h4>
          <p>
            আপনার সহযোগীদের সাথে আপনার রেফারেল লিঙ্ক শেয়ার করুন এবং তারা আপনার লিঙ্ক ব্যবহার করে সাইন আপ করার পরে এবং একটি সফল আমানত করার পরে আপনি একটি কমিশন পেতে পারেন।
          </p>
        </>
      ),
    },
    {
      question: "আমার ব্যালেন্সে পেমেন্ট পোস্ট করা হয়নি",
      answer: (
        <p>
          যদি আপনার পেমেন্ট আসতে ব্যর্থ হয়, তাহলে অনুগ্রহ করে গ্রাহক পরিষেবা নিশ্চিত করতে অর্থপ্রদানের তথ্য আপলোড করতে "আমার অর্ডার" পৃষ্ঠায় যান। 24 ঘন্টা ধৈর্য ধরে অপেক্ষা করুন। আরও সাহায্যের জন্য, অনুগ্রহ করে অনলাইন গ্রাহক পরিষেবার সাথে যোগাযোগ করুন।
        </p>
      ),
    },
    {
      question: "প্রত্যাহার প্রক্রিয়াকরণ",
      answer: (
        <p>
          আপনার প্রত্যাহারের অনুরোধ জমা দেওয়ার পরে, অনুগ্রহ করে চিন্তা করবেন না কারণ প্রত্যাহার প্রক্রিয়া করা হচ্ছে। যেহেতু প্রতিটি ব্যাঙ্ক স্থানান্তর প্রক্রিয়া করতে বিভিন্ন সময় নেয়, বিলম্ব মাঝে মাঝে ঘটতে পারে, বিশেষ করে মহামারীর সময়, যা স্বাভাবিকের চেয়ে বেশি সময় নিতে পারে।
        </p>
      ),
    },
    {
      question: "অ্যাকাউন্ট লগ ইন করা যাবে না",
      answer: (
        <p>
          আপনার নিবন্ধিত অ্যাকাউন্ট নম্বর এবং পাসওয়ার্ডটি 100% সঠিক কিনা তা নিশ্চিত করতে দয়া করে সাবধানে পরীক্ষা করুন। 
          অনুগ্রহ করে আপনার অ্যাকাউন্ট নিরাপদ রাখুন এবং অন্যকে পাঠাবেন না।
        </p>
      ),
    },
    {
      question: "আমি কিভাবে আমার পাসওয়ার্ড পরিবর্তন করব?",
      answer: (
        <p>
          পাসওয়ার্ড রিসেট সমর্থন করে না, দয়া করে আপনার অ্যাকাউন্টের তথ্য সঠিকভাবে রাখুন।
        </p>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 text-gray-800 p-6">
      <div className=" mx-auto bg-white rounded-lg shadow-md p-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">সচরাচর জিজ্ঞাস্য (FAQ)</h1>
          <p className="text-lg text-gray-600">আপনার প্রশ্নের উত্তর খুঁজুন।</p>
        </header>

        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none hover:bg-gray-200 transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 px-2">{item.question}</h2>
              <span className="text-lg text-gray-600">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="pl-4 pb-4 bg-gray-100 rounded-lg shadow-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
