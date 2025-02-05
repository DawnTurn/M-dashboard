import ProfileCard from "@/components/profile/ProfileCard"
import About from "@/components/profile/About"

export default function ProfileContainer(){
    return (
        <main className="w-[80%] p-6 bg-profileCardBg rounded-xl">
            <div className="flex gap-6 w-full">
                <ProfileCard/> 
                <About/>
            </div>
        </main>
    )
}

