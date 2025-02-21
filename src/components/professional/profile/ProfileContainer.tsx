import ProfileCard from "@/components/professional/profile/ProfileCard"
import About from "@/components/professional/profile/About"

interface ProfileContainerProps {
    onExpertiseOpenModal: () => void;
    onCertificationOpenModal: () => void;
}

export default function ProfileContainer({onExpertiseOpenModal, onCertificationOpenModal}: ProfileContainerProps){
    return (
        <main className="w-[75%] rounded-xl overflow-y-auto h-[75vh]">
            <div className="flex gap-6 p-6 bg-mainCardBg rounded-xl w-full">
                <ProfileCard/> 
                <About 
                    onExpertiseOpenModal={onExpertiseOpenModal}
                    onCertificationOpenModal={onCertificationOpenModal}
                />
            </div>
        </main>
    )
}

