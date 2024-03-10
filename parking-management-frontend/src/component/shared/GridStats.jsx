import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const customTransactionsData = [
  { name: 'Jan', increase: 200, decrease: 350 },
  { name: 'Feb', increase: 150, decrease: 100 },
  { name: 'Mar', increase: 200, decrease: 90 },
  { name: 'Apr', increase: 220, decrease: 180 },
  { name: 'May', increase: 420, decrease: 110 },
  { name: 'Jun', increase: 650, decrease: 490 },
  { name: 'Jul', increase: 300, decrease: 150 },
  { name: 'Aug', increase: 280, decrease: 300 },
  { name: 'Sep', increase: 100, decrease: 200 },
  { name: 'Oct', increase: 450, decrease: 120 },
  { name: 'Nov', increase: 200, decrease: 300 },
  { name: 'Dec', increase: 200, decrease: 240 },

  // Add more data as needed
];

const TransactionChart = () => {
  const transactionsData = customTransactionsData;

  return (
    <div className='h-[37rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
      <strong className='text-gray-700 font-medium'> Number of Users 2023: </strong>
      <div className='w-full mt-3 flex-1 text-xs mb-5'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={transactionsData}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="increase" fill="#0ea5e9" />
            <Bar dataKey="decrease" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
