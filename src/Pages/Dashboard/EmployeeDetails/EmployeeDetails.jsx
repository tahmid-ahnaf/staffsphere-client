import { Card } from "flowbite-react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const EmployeeDetails = () => {

    const data = [
        {
            month: 'Page A',
          salary: 2400,
        },
        {
            month: 'Page B',
          salary: 1398,
        },
        {
            month: 'Page C',
          salary: 9800,
        },
        {
            month: 'Page D',
          salary: 3908,
        },
        {
            month: 'Page E',
          salary: 4800,

        },
        {
            month: 'Page F',
          salary: 3800,
        },
        {
            month: 'Page G',
          salary: 4300,
          
        },
      ];
    
    return (
        <div>
            <div className='flex flex-col'>

            <Card className="mb-8">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          src="https://i.ibb.co/P51mzQm/My-DP.jpg"
          className="mb-3 rounded-full shadow-lg w-[150px] h-[150px]"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
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