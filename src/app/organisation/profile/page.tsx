'use client'
import { useState } from "react";
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBarCard";
import ProfileContainer from "@/components/organisations/profile/ProfileContainer";
import AProfessionalsM from "@/components/organisations/modal/AProfessionalsM"

export default function ProfilePage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-background h-screen pb-10">
            {isModalOpen && <AProfessionalsM onClose={() => setIsModalOpen(false)} />}

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar />
                    <ProfileContainer
                        onOpenModal = {() => setIsModalOpen(true)}
                    />
                </div>
            </div>
        </div>
    );
}
