import { Helmet } from 'react-helmet-async';
import TestimonialSlider from '../../components/Testimonial/TestimonialSlider/TestimonialSlider';
import Services from '../../components/Services/Services';
import Banner from '../../components/Banner/Banner';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>

    <TestimonialSlider></TestimonialSlider>
            
        </div>
        
    );
};

export default Home;