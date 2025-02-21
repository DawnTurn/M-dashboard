'use client'
import { useState } from "react";
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar-New/SideBarCard";
import ProfileContainer from "@/components/professional/profile/ProfileContainer";
import ExpertiseModal from "@/components/professional/modal/ExpertiseModal";
import CertificateModal from "@/components/professional/modal/CertificateModal";

export default function ProfilePage() {
    interface showModal {
        expertise: boolean,
        certificate: boolean
    }

    const [isModalOpen, setIsModalOpen] = useState<showModal>({
        expertise: false,
        certificate: false
    });

    return (
        <div className="bg-backgroundNew h-screen pb-10">
            {isModalOpen.expertise && <ExpertiseModal onExpertiseClose={() => setIsModalOpen(
                (prev) => ({...prev, expertise: false})
            )} />}

            {isModalOpen.certificate && <CertificateModal onCertificationClose={() => setIsModalOpen(
                (prev) => ({...prev, certificate: false})
            )} /> }

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar profileBg="bg-primaryNew text-white"/>
                    <ProfileContainer 
                        onExpertiseOpenModal={() => setIsModalOpen(
                            (prev) => ({...prev, expertise: true})
                        )}
                        onCertificationOpenModal={() => setIsModalOpen(
                            (prev) => ({...prev, certificate: true})
                        )}
                    />
                </div>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        </div>
    );
}
