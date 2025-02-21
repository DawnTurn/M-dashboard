import EditProfile from "@/components/edit-profile/EditProfileP";
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar-New/SideBarCard";

export default function ProfilePage() {

    return (
        <div className="bg-backgroundNew h-screen pb-10">

            <div className="w-full bg-map">
                <Nav/>
                <NavBar/>
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar profileBg="bg-primaryNew text-white"/>
                    <EditProfile/>
                </div>
            </div>
        </div>
    );
}