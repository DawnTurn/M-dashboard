import NavigationLinks from '@/components/SideBar-New/NavigationLinks';
import DepartmentSec from '@/components/SideBar-New/DepartmentSec';

interface SideBarProps{
    dashboardBg?: string;
    departmentBg?: string;
    activitiesBg?: string;
    jobsBg?: string;
    APprofessionalBg?: string;
    notificationBg?: string;
    profileBg?: string;
    settingsBg?: string;
    mentorshipBg?: string;
}

export default function SideBar({
    dashboardBg,
    departmentBg,
    activitiesBg,
    jobsBg,
    APprofessionalBg,
    notificationBg,
    profileBg,
    settingsBg,
    mentorshipBg
}: SideBarProps) {
    return (
        <aside className='w-[20%] h-[75vh] pb-6 overflow-y-auto'>
            <NavigationLinks
                dashboardBg={dashboardBg}
                departmentBg={departmentBg}
                activitiesBg={activitiesBg}
                jobsBg={jobsBg}
                APprofessionalBg={APprofessionalBg}
                notificationBg={notificationBg}
                profileBg={profileBg}
                settingsBg={settingsBg}
                mentorshipBg={mentorshipBg}
            />
            <DepartmentSec/>
        </aside>
    );
};