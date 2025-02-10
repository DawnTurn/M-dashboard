import NavigationLinks from '@/components/SideBar/NavigationLinks';
import DepartmentSec from '@/components/SideBar/DepartmentSec';

export default function SideBar() {
    return (
        <aside className='w-[20%] h-[75vh] pb-6 overflow-y-auto'>
            <NavigationLinks/>
            <DepartmentSec/>
        </aside>
    );
};