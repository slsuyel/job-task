import { Link } from 'react-router-dom';

interface EarningsData {
  _id: string;
  dailyPercentage: number;
  totalPercentage: number;
  dailyIncome: number;
  totalEarnings: number;
  days: number;
  price: number;
  cashback?: number; 
}

const Card = ({ data, images }: { data: EarningsData[], images: { src: string, alt: string }[] }) => {
  return (
    <div className="mb-10">
      {data.map((item, index) => (
        <div key={index} className="card bg-base-100 shadow-xl w-full my-4">
          <figure>
            {/* Use the corresponding image based on the index */}
            <img src={images[index]?.src} alt={images[index]?.alt || `Image of ${item.dailyPercentage}% daily`} className='w-full  rounded-md shadow-lg object-cover transition-transform transform hover:scale-105' />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title flex justify-between">
              <h1>আই সি বি সি পন্য</h1>
              <div className="badge badge-secondary font-xl">{item.dailyPercentage}%</div>
            </h2>
            <div className='flex justify-between'>
              <p>মোট শতাংশ: {item.totalPercentage}</p>
              <p className='text-end'>দৈনিক আয়: {item.dailyIncome}</p>
            </div>
            <p className='text-center text-red-400'>মোট উপার্জন: {item.totalEarnings}</p>
            <div className='flex justify-between'>
              <p>দাম: ৳{item.price}</p>
              <p className='text-end'>দিন: {item.days}</p>
            </div>
            <Link className='btn btn-primary' to={`/product/${item._id}`}>কিনুন</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
