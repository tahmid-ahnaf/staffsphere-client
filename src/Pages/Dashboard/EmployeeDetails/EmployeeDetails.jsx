import { Card } from "flowbite-react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useDetails from "../../../hooks/useDetails";
import { useParams } from "react-router-dom";



const EmployeeDetails = () => {

  const {email,name,designation,photoURL} = useParams();
  console.log(email);
  const decodedPhotoURL = decodeURIComponent(photoURL);

  const [details, refetch] = useDetails(email);

    const data = details;
    
    return (
        <div>
            <div className='flex flex-col'>

            <Card className="mb-8">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="image"
          src={decodedPhotoURL}
          className="mb-3 rounded-full shadow-lg w-[150px] h-[150px]"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{designation}</span>
      </div>
    </Card>

        <BarChart
        width={800}
      height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#155E75" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
            </div>      
        </div>
    );
};

export default EmployeeDetails;