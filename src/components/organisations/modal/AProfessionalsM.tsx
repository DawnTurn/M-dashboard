import Image from "next/image"
import cancelLogo from '../../../../public/images/cancel.svg'
import Link from "next/link";
import profilePic1 from "../../../../public/images/AP-profile-1.png"
import profilePic2 from "../../../../public/images/AP-profile-2.png"
import profilePic3 from "../../../../public/images/AP-profile-3.png"

interface ModalPageProps{
    onClose: () => void;
}

export default function ModalPage({onClose}: ModalPageProps) {

    return (
        <div className="fixed w-full h-screen flex items-center justify-center overflow-y-auto bg-black/50">
            <div className="w-[420px] bg-mainCardBg/80 backdrop-blur-[3px] py-6 rounded-xl">
                <div className="px-4">
                    <div className="flex justify-end">
                        <Image 
                            src={cancelLogo} 
                            className="cursor-pointer" 
                            alt="Close"
                            onClick={onClose}
                        />
                    </div>
                    <p className="py-6 font-bold">Affiliated Professionals</p>
                </div>

                <div className="flex flex-col gap-[2px]">              
                    <div className="flex items-center justify-between px-8 py-4 bg-white">
                        <div className="flex items-center gap-4">
                            <Image src={profilePic1} width={45} alt="profile pic"/>
                            <div>
                                <h3 className="text-[.75rem]">Feyisara Ogunranti</h3>
                                <p className="text-[.75rem]">Auditor</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-8 py-4 bg-white">
                        <div className="flex items-center gap-4">
                            <Image src={profilePic2} width={45} alt="profile pic"/>
                            <div>
                                <h3 className="text-[.75rem]">Femi Adetuna</h3>
                                <p className="text-[.75rem]">Auditor</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-8 py-4 bg-white">
                        <div className="flex items-center gap-4">
                            <Image src={profilePic3} width={45} alt="profile pic"/>
                            <div>
                                <h3 className="text-[.75rem]">Feyisara Ogunranti</h3>
                                <p className="text-[.75rem]">Auditor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
