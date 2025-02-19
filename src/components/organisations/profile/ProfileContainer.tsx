import ProfileCard from "@/components/organisation/profile/ProfileCard"
import About from "@/components/organisation/profile/About"

interface ProfileContainerProps{
    onOpenModal: () => void;
}

export default function ProfileContainer({onOpenModal}: ProfileContainerProps){
    return (
        <main className="w-[75%] rounded-xl overflow-y-auto h-[75vh]">
            <div className="flex gap-6 p-6 bg-profileCardBg rounded-xl w-full">
                <ProfileCard onOpenModal={onOpenModal} /> 
                <About />
            </div>
        </main>
    )
}