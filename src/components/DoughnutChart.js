import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// BiSolidDoughnutChart
// MdOutlineTableChart
const data = [
  { name: 'Male', value: 400 },
  { name: 'Female', value: 350 },
  { name: 'Unknown', value: 250 },
];
const COLORS = ['#FF823C', '#0096FF', '#323C46'];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div style={{ background: 'white', border: '1px solid #ccc', padding: '10px', fontSize: '12px' , color:'black' }}>
        <p>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const DoughnutChart = () => {
  return (
    <PieChart width={300} height={300}>
        <Tooltip />
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={75}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
  );
}

export default DoughnutChart;