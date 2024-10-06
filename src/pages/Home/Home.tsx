
import Slider from 'react-slick';
import img1 from '/byk-1.jpg';
import img2 from '/byk-2.jpg';
import img3 from '/byk-3.jpg';
import img4 from '/byk-4.jpg';
import img5 from '/byk-5.jpg';
import img6 from '/byk-6.jpg';
import img7 from '/byk-7.jpg';
import img8 from '/byk-8.jpg';
import Card from './Card';
import Notice from './Notice';

const Home = () => {

  const data = [
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
      dailyIncome: 1800,
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



  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-full mx-auto overflow-hidden'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} className='w-full h-[250px] object-cover'  alt={image.alt} />
          </div>
        ))}
      </Slider>


<Notice/>

      
<Card data={data}/>

    </div>
  );
};

export default Home;
