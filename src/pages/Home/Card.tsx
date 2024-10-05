import { Link } from 'react-router-dom';

interface EarningsData {
  dailyPercentage: number;
  totalPercentage: number;
  dailyIncome: number;
  totalEarnings: number;
  days: number;
  price: number;
  img: string; 
  cashback?: number; 
}


const Card = ({data}:{data:EarningsData[]}) => {
  return (
    <div className=" mb-10">
      {data.map((item, index) => (
        <div key={index} className="card bg-base-100 shadow-xl w-full">
          <figure>
            <img src={item.img} alt={`Image of ${item.dailyPercentage}% daily`} className='w-full rounded-md' />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title flex justify-between">
              <h1>আই সি বি সি পন্য              </h1>
              <div className="badge badge-secondary font-xl">{item.dailyPercentage}%</div>
            </h2>
           <div className='flex   justify-between'>
              <p>মোট শতাংশ: {item.totalPercentage}</p>
              <p className='text-end '>দৈনিক আয়: {item.dailyIncome}</p>
           </div>
            <p className='text-center text-red-400'>মোট উপার্জন: {item.totalEarnings}</p>
            <div className='flex   justify-between'>
            <p className=''>দাম: ৳{item.price}</p>
          
            <p className='text-end '>দিন: {item.days}</p>
            </div>
            
<Link className='btn btn-primary' to={'/'}>কিনুন </Link>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
