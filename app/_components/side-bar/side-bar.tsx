import { fetchSideBarData } from '@/api';
import Pop from '../pop/pop';
import { SideBarDataType } from '@/types';
const SideBar: React.FC = async () => {
  const data: SideBarDataType = await fetchSideBarData();

  return (
    <aside className="p-3 bg-yellow-400">
      <h1 className="">SideBar</h1>
      {Object.entries(data).map(([key, value]) => (
        <Pop key={key} name={key} data={value} />
      ))}
    </aside>
  );
};

export default SideBar;
