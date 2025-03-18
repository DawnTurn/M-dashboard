'use client'
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar-New/SideBarCard";
import BookMentor from "@/components/professional/mentorship/book-mentor/BookMentor"



export default function MentorshipPage() {

    return (
        <div className="bg-backgroundNew h-screen pb-10">

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar mentorshipBg="bg-primaryNew text-white"/>                 
                    <BookMentor/>
                </div>
            </div>
        </div>
    );
}