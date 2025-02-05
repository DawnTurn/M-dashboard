import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBarCard";
import ProfileContainer from "@/components/profile/ProfileContainer"

export default function ProfilePage() {
    return (
        <div className="bg-background">
            <div className="w-full">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar/>
                    <ProfileContainer/>
                </div>
            </div>
        </div>
    )
}