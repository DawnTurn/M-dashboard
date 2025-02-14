import Image from "next/image"
import chevronRight from "../../../../public/images/APchevronRight.png"
import profilePic1 from "../../../../public/images/AP-profile-1.png"
import profilePic2 from "../../../../public/images/AP-profile-2.png"
import profilePic3 from "../../../../public/images/AP-profile-3.png"
import Link from "next/link"

interface AProfessionalsProps{
    onOpenModal: () => void;
}

export default function AProfessionals({onOpenModal}: AProfessionalsProps){
    return (
        <div className="pt-10">
            <div className="w-full flex justify-between items-center mb-5">
                <h2 className="text-sm font-bold">Affiliated Professionals</h2>

                <button 
                    className="cursor-pointer text-[.75em]"
                    onClick={onOpenModal}
                >
                    View
                </button>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={profilePic1} width={40} alt="profile pic"/>
                        <div>
                            <h3 className="text-[.75rem]">Feyisara Ogunranti</h3>
                            <p className="text-[.75rem]">Auditor</p>
                        </div>
                    </div>
                    <Image src={chevronRight} width={20} alt=""/>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={profilePic2} width={40} alt="profile pic"/>
                        <div>
                            <h3 className="text-[.75rem]">Femi Adetuna</h3>
                            <p className="text-[.75rem]">Auditor</p>
                        </div>
                    </div>
                    <Image src={chevronRight} width={20} alt=""/>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={profilePic3} width={40} alt="profile pic"/>
                        <div>
                            <h3 className="text-[.75rem]">Feyisara Ogunranti</h3>
                            <p className="text-[.75rem]">Auditor</p>
                        </div>
                    </div>
                    <Image src={chevronRight} width={20} alt=""/>
                </div>
            </div>
        </div>
    )
}

