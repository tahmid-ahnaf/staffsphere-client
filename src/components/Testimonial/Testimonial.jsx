import { Card } from "flowbite-react";
const Testimonial = ({slider}) => {
    return (
        <Card className="h-[600px]">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={slider.imageURL}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{slider.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{slider.designation}</span>
        <p className='text-sm '>{slider.reviewText}</p>
      </div>
    </Card>
    );
};

export default Testimonial;