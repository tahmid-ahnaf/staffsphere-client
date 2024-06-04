import React from 'react';
import { Card, Dropdown } from "flowbite-react";
const Testimonial = () => {
    return (
        <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
      </div>
    </Card>
    );
};

export default Testimonial;