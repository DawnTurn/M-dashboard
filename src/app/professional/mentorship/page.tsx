'use client'
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import MentorContainer from "@/components/professional/mentorship/MentorContainer";
import SideBar from "@/components/SideBar-New/SideBarCard";



export default function MentorshipPage() {

    return (
        <div className="bg-backgroundNew h-screen pb-10">

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar mentorshipBg="bg-primaryNew text-white"/>
                    <MentorContainer/>
                </div>
            </div>
        </div>
    );
}