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


export default function NavigationLinks(){
    return (
        <div className="w-full text-sm">
            <ul className="bg-sideBarBg rounded-xl p-5 flex flex-col gap-2">
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={dashboardIcon} width={14} alt=""></Image>
                        <span className="text-primary">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={departmentIcon} width={14} alt=""></Image>
                        <span className="text-primary">Department</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={activitiesIcon} width={14} alt=""></Image>
                        <span className="text-primary">Activities</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={jobIcon} width={14} alt=""></Image>
                        <span className="text-primary">Jobs</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={AProfessionalIcon} width={14} alt=""></Image>
                        <span className="text-primary">Affliated Professionals</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={notificationIcon} width={14} alt=""></Image>
                        <span className="text-primary">Notification</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl bg-primary">
                        <Image src={profileIcon} width={14} alt=""></Image>
                        <span className="text-white">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={settingsIcon} width={14} alt=""></Image>
                        <span className="text-primary">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link href={''} className="flex items-center py-2 px-4 gap-3 rounded-3xl">
                        <Image src={settingsIcon} width={14} alt=""></Image>
                        <span className="text-primary">Mentorship</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

