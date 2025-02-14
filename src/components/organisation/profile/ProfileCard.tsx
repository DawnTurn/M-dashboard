import Image from "next/image"
import profilePic from '../../../../public/images/pheonix-logo.svg'
import markedStar from '../../../../public/images/markedStar.png'
import star from '../../../../public/images/star.png'
import AProfessionals from "@/components/organisation/profile/AProfessionals"
import Accreditation from "@/components/organisation/profile/Accreditation"

interface ProfileCardProps{
    onOpenModal: () => void;
}

export default function ProfileCard({onOpenModal}: ProfileCardProps) {
    return (
        <div className="w-[25%]">
            <div className="text-center pt-4 flex flex-col items-center mb-6">
                <Image src={profilePic} width={150} alt="a profile picture"></Image>
                <h1 className="text-2xl pt-4 font-bold">Pheonix</h1>
                <h3 className="text-sm">Media & Consultancy</h3>
            </div>

            <div className="text-sm flex justify-between py-2 px-3 items-center bg-white rounded-md">
                <p className="font-bold">Company Size</p>
                <span className="text-[.75em]">2,309 Members</span>
            </div>

           

            <div>
                <AProfessionals onOpenModal = {onOpenModal}/>

                <div className="h-[1px] w-full bg-gray-400 my-8"></div>
                
                <Accreditation/>
           </div>
        </div>
    )
}

