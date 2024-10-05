import img1 from '/byk-1.jpg';
import img2 from '/byk-2.jpg';
import img3 from '/byk-3.jpg';
import img4 from '/byk-4.jpg';
import img5 from '/byk-5.jpg';
import img6 from '/byk-6.jpg';
import img7 from '/byk-7.jpg';
import img8 from '/byk-8.jpg';

interface EarningsData {
  dailyPercentage: number;
  totalPercentage: number;
  dailyIncome: number;
  totalEarnings: number;
  days: number;
  price: number;
  cashback?: number; 
  img: string; 
}

const data: EarningsData[] = [
  {
    dailyPercentage: 30,
    totalPercentage: 1800,
    dailyIncome: 60,
    totalEarnings: 3600,
    days: 60,
    price: 200,
    img: img1,
  },
  {
    dailyPercentage: 31,
    totalPercentage: 1900,
    dailyIncome: 155,
    totalEarnings: 9300,
    days: 60,
    price: 500,
    cashback: 10,
    img: img2,
  },
  {
    dailyPercentage: 32,
    totalPercentage: 2000,
    dailyIncome: 320,
    totalEarnings: 19200,
    days: 60,
    price: 1000,
    cashback: 10,
    img: img3,
  },
  {
    dailyPercentage: 34,
    totalPercentage: 2100,
    dailyIncome: 680,
    totalEarnings: 40800,
    days: 60,
    price: 2000,
    cashback: 10,
    img: img4,
  },
  {
    dailyPercentage: 36,
    totalPercentage: 1800,
    dailyIncome: 22500,
    totalEarnings: 108000,
    days: 60,
    price: 5000,
    img: img5,
  },
  {
    dailyPercentage: 38,
    totalPercentage: 2300,
    dailyIncome: 3800,
    totalEarnings: 228000,
    days: 60,
    price: 10000,
    cashback: 10,
    img: img6,
  },
  {
    dailyPercentage: 45, 
    totalPercentage: 2700,
    dailyIncome: 13750,
    totalEarnings: 412500,
    days: 60,
    price: 25000,
    cashback: 10,
    img: img8,
  },
  {
    dailyPercentage: 50,
    totalPercentage: 3000,
    dailyIncome: 22500,
    totalEarnings: 675000,
    days: 60,
    price: 45000,
    img: img7,
  },
];

const Card = () => {
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className="card bg-base-100 shadow-xl w-full">
          <figure>
            <img src={item.img} alt={`Image of ${item.dailyPercentage}% daily`} />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title flex justify-between">
              <h1>আই সি বি সি পন্য              </h1>
              <div className="badge badge-secondary font-xl">{item.dailyPercentage}%</div>
            </h2>
            <p>মোট শতাংশ: {item.totalPercentage}</p>
            <p>দৈনিক আয়: {item.dailyIncome}</p>
            <p>মোট উপার্জন: {item.totalEarnings}</p>
            <div className='flex  border justify-around'>
            <p className='text-center'>দাম: ৳{item.price}</p>
          
            <p className='text-center '>দিন: {item.days}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
