import Link from "next/link"
import Image from "next/image"
import dashboardIcon from "../../../public/images/dashboardIcon.png"
import departmentIcon from "../../../public/images/departmentIcon.png"
import activitiesIcon from "../../../public/images/activitiesIcon.png"
import jobIcon from "../../../public/images/jobsIcon.png"
import AProfessionalIcon from "../../../public/images/aprofessionalsIcon.png"
import notificationIcon from "../../../public/images/notificationIcon.png"
import profileIcon from "../../../public/images/profileIcon.png"
import settingsIcon from "../../../public/images/settingsIcon.png"

interface NavigationLinksProps{
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

export default function NavigationLinks({
    dashboardBg,
    departmentBg,
    activitiesBg,
    jobsBg,
    APprofessionalBg,
    notificationBg,
    profileBg,
    settingsBg,
    mentorshipBg
}: NavigationLinksProps){

    return (
        <div className="w-full text-sm">
            <ul className="bg-sideBarBg rounded-xl p-5 flex flex-col gap-2">
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${dashboardBg} text-primary`}>
                        <Image src={dashboardIcon} width={14} alt=""></Image>
                        <span className="">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${departmentBg} text-primary`}>
                        <Image src={departmentIcon} width={14} alt=""></Image>
                        <span className="">Department</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${activitiesBg} text-primary`}>
                        <Image src={activitiesIcon} width={14} alt=""></Image>
                        <span className="">Activities</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${jobsBg} text-primary`}>
                        <Image src={jobIcon} width={14} alt=""></Image>
                        <span className="">Jobs</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${APprofessionalBg} text-primary`}>
                        <Image src={AProfessionalIcon} width={14} alt=""></Image>
                        <span className="">Affliated Professionals</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${notificationBg} text-primary`}>
                        <Image src={notificationIcon} width={14} alt=""></Image>
                        <span className="">Notification</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${profileBg} text-primary`}>
                        <Image src={profileIcon} width={14} alt=""></Image>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${settingsBg} text-primary`}>
                        <Image src={settingsIcon} width={14} alt=""></Image>
                        <span className="">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className={`flex items-center py-2 px-4 gap-3 rounded-3xl ${mentorshipBg} text-primary`}>
                        <Image src={settingsIcon} width={14} alt=""></Image>
                        <span className="">Mentorship</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

