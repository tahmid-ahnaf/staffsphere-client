import { Helmet } from 'react-helmet-async';
import TestimonialSlider from '../../components/Testimonial/TestimonialSlider/TestimonialSlider';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <h2>Home Page</h2>

    <TestimonialSlider></TestimonialSlider>
            
        </div>
        
    );
};

export default Home;