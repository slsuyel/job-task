import Slider from 'react-slick';
import img1 from '/byk-1.jpg';
import img2 from '/byk-2.jpg';
import img3 from '/byk-3.jpg';
import img4 from '/byk-4.jpg';
import img5 from '/byk-5.jpg';
import img6 from '/byk-6.jpg';
import img7 from '/7777777.webp';
import img8 from '/byk-8.jpg';
import Card from './Card';
import Notice from './Notice';
import { useEffect, useState } from 'react';
import { callApi } from '@/utils/functions';
import Loader from '@/components/ui/Loader';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi('GET', '/api/products');
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
  }, []);

  if (loading) {
    return <Loader />;
  }

  const images = [
    { src: img1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
    { src: img3, alt: 'Image 3' },
    { src: img4, alt: 'Image 4' },
    { src: img5, alt: 'Image 5' },
    { src: img6, alt: 'Image 6' },
    { src: img7, alt: 'Image 7' },
    { src: img8, alt: 'Image 8' },
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
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              className="w-full h-[250px] object-cover"
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>

      <Notice />

      <Card data={data} images={images} />
    </div>
  );
};

export default Home;
