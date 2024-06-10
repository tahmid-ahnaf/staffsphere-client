import { Helmet } from 'react-helmet-async';
import TestimonialSlider from '../../components/Testimonial/TestimonialSlider/TestimonialSlider';
import Services from '../../components/Services/Services';
import Banner from '../../components/Banner/Banner';
import { useEffect, useState } from 'react';
const Home = () => {
    const [sliderData, setSliderData] = useState([]);
    useEffect(() => {

        async function fetchData() {
          try {
            const response = await fetch('data.json');
            const data = await response.json();
            setSliderData(data);
          } catch (error) {
            console.error("Could not fetch data", error);
          }
        }
    
        fetchData();
      }, []);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <TestimonialSlider sliderData={sliderData}></TestimonialSlider>
            
        </div>
        
    );
};

export default Home;