import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className=" mb-8 mx-auto bg-white rounded-lg shadow-md p-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-lg">
            স্বাগতম <strong>আই সি বি সি </strong>!
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">আই সি বি সি </h2>
          <p className="mb-4">
            আই সি বি সি  একটি দীর্ঘ ইতিহাস সহ একটি আর্থিক প্রতিষ্ঠান। 
            প্রথাগত নীতি সহ অন্যান্য ব্যাঙ্কগুলির মতো আমাদের কোম্পানির লক্ষ্য 
            আমাদের গ্রাহকদের সম্পদ পরিচালনা করার সময় আমাদের কাছে থাকা 
            সুযোগগুলি থেকে সর্বাধিক উত্তোলন করা। আই সি বি সি ের ভিত্তি 
            সেই দিকটি নিয়ে গঠিত যা এখন আমাদের স্বতন্ত্র বৈশিষ্ট্যে 
            পরিণত হয়েছে। এটি ক্রস-বীমা প্রক্রিয়া যা আমাদের সমস্ত ক্লায়েন্টকে 
            তাদের তহবিল সুরক্ষিত করতে সক্ষম করে, এমনকি যদি পৃথিবী বিচ্ছিন্ন হয়ে যায়।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">সাম্প্রতিক ঘটনা</h2>
          <p className="mb-4">
            2024, সেপ্টেম্বর 31 নিউজিল্যান্ড শাখা এবং বর্ধিত SSL।
            <br />
            আই সি বি সি  কর্পোরেট গ্রুপের প্রিয় গ্রাহকরা! 
            <br />
            আই সি বি সি ের সিইও ফেদেরিক মাইকেল দ্বারা প্রকাশিত,
            STB সঞ্চিত তহবিলে অনুমোদিত অ্যাক্সেস সম্পর্কিত নিরাপত্তার স্তর 
            বাড়ায় এবং এছাড়াও আর্থিকভাবে সক্রিয় এখতিয়ার জুড়ে নতুন শাখা অফিস 
            খোলার মাধ্যমে কোম্পানিকে প্রসারিত করে।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">আমাদের পরিষেবাগুলি</h2>
          <h3 className="text-lg font-semibold">ব্যাঙ্কিং</h3>
          <p className="mb-2">
            আই সি বি সি  একটি আর্থিক প্রতিষ্ঠান হিসাবে বিনিয়োগ ব্যাঙ্কিং 
            এলাকায় একটি বৃহৎ কার্যকলাপ পরিচালনা করে যার প্রাথমিক উদ্দেশ্য হল 
            ব্যক্তি এবং কর্পোরেশনগুলিকে সিকিউরিটিজ ইস্যুতে তাদের এজেন্ট হিসাবে 
            কাজ করার মাধ্যমে মূলধন বাড়াতে সহায়তা প্রদান করা।
          </p>
          
          <h3 className="text-lg font-semibold">OIL & GAS INDUSTRY</h3>
          <p className="mb-2">
            আমাদের সহযোগী সংস্থাগুলি শক্তির সংস্থানগুলি নিয়ে কাজ করে, 
            যার মধ্যে রয়েছে অন্বেষণ, নিষ্কাশন এবং বাজারজাতকরণ।
          </p>

          <h3 className="text-lg font-semibold">HEAVY INDUSTRY</h3>
          <p className="mb-2">
            আই সি বি সি  ভারী শিল্পে পণ্য বিক্রির দিকে মনোনিবেশ করে, 
            যার মধ্যে রয়েছে অটোমোবাইল নির্মাণ এবং ভারী যন্ত্রপাতি।
          </p>

          <h3 className="text-lg font-semibold">REAL ESTATE</h3>
          <p className="mb-2">
            আমরা বাণিজ্যিক রিয়েল এস্টেট ব্যবসায় একটি #1 অবস্থান পেতে চেষ্টা করি।
          </p>

          <h3 className="text-lg font-semibold">SECURITIES MARKET</h3>
          <p className="mb-2">
            আমরা মালিকানা হস্তান্তর এবং হেজিং (বীমা) পরিষেবা প্রদান করি।
          </p>
        </section>

        <footer className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">ভবিষ্যতের জন্য আমাদের লক্ষ্য</h2>
          <p>
            আই সি বি সি  তার ক্লায়েন্ট এবং অংশীদারদের জন্য 
            আরও বেশি মুনাফা বয়ে আনবে।
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
