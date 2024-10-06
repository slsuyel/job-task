import Loader from "@/components/ui/Loader";
import { callApi } from "@/utils/functions";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  _id: string;
  dailyPercentage: number;
  totalPercentage: number;
  dailyIncome: number;
  totalEarnings: number;
  days: number;
  price: number;
  imageUrl?: string; // optional property
  name?: string;     // optional property
}

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Product = await callApi('GET', `/products/${id}`);
        if (data) {
          setData(data);
        } else {
          throw new Error('No data received');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      
      {data && (
        <div className="card bg-base-100 shadow-xl w-full my-4">
          <figure>
          <img
        src={data.imageUrl || 'https://jony-invest.vercel.app/byk-1.jpg'}
        alt={data.name || 'Product Image'}
        className="w-full  rounded-md shadow-lg object-cover transition-transform transform hover:scale-105"
      />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title flex justify-between">
              <h1>{data.name || 'Product Name'}</h1>
              <div className="badge badge-secondary font-xl">{data.dailyPercentage}%</div>
            </h2>
            <div className='flex justify-between'>
              <p>মোট শতাংশ: {data.totalPercentage}</p>
              <p className='text-end'>দৈনিক আয়: {data.dailyIncome}</p>
            </div>
            <p className='text-center text-red-400'>মোট উপার্জন: {data.totalEarnings}</p>
            <div className='flex justify-between'>
              <p>দাম: ৳{data.price}</p>
              <p className='text-end'>দিন: {data.days}</p>
            </div>
            <Link className='btn btn-primary' to={`/product/${data._id}`}>কিনুন</Link>
          </div>
        </div>
          )}
          
          <br />
          <br />
          <br />
    </div>
  );
};

export default SingleProduct;
