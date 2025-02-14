'use client'
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBarCard";

export default function ProfilePage() {

    return (
        <div className="bg-background h-screen pb-10">

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar />
                    
                </div>
            </div>
        </div>
    );
}