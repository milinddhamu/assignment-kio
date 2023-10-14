import AdsData from '@/components/AdsData';
import AdsChart from '@/components/AdsChart';
const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full p-4 gap-4 '>
      <AdsData />
      <AdsChart />
      </div>
  );
}

export default Dashboard;