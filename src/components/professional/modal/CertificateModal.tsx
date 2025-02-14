import Image from "next/image"
import cancelLogo from '../../../../public/images/cancel.svg'
import Link from "next/link";
import foodsafetyCertificate from '../../../../public/images/foodSafetyCertificate.png'
import qualityCertificate from '../../../../public/images/qualityCertificate.png'
import foodsafetyCertificate2 from '../../../../public/images/FoodSafetyCertificate2.png'

interface CertificationModalProps {
    onCertificationClose: () => void;
}

export default function CertificateModal({ onCertificationClose }: CertificationModalProps){
    return(
        <div className="fixed w-full h-screen flex items-center justify-center bg-black/50 overflow-y-auto">
            <div className="w-[420px] bg-profileCardBg/80 backdrop-blur-[3px] py-6 rounded-xl">
                <div className="px-4">
                    <div className="flex justify-end">
                        <Image 
                            src={cancelLogo}
                            alt="Close"
                            onClick={onCertificationClose}
                            className="cursor-pointer"
                        />
                    </div>
                    <p className="py-6 font-bold">Certification</p>
                </div>

                <div className="flex flex-col gap-[2px]">
                    <div className="flex justify-between items-center px-8 py-4 bg-white">
                        <div className="flex items-center gap-3 text-[.8rem]">
                            <Image src={foodsafetyCertificate} width={80} alt=""/>
                            <div>
                                <h3 className="font-bold">Certificate of Completion</h3>
                                <p>Food safety</p>
                            </div>
                        </div>
                        <button>
                            <Link href={'/profile/certification'} className="py-2 px-5 text-[.8rem] bg-highlightBg rounded-2xl">View</Link>
                        </button>
                    </div>

                    <div className="flex justify-between items-center px-8 py-4 bg-white">
                        <div className="flex items-center gap-3 text-[.8rem]">
                            <Image src={qualityCertificate} width={70} alt=""/>
                            <div>
                                <h3 className="font-bold">Certificate of Completion</h3>
                                <p>Quality Management System</p>
                            </div>
                        </div>
                        <button>
                            <Link href={''} className="py-2 px-5 text-[.8rem] bg-highlightBg rounded-2xl">View</Link>
                        </button>
                    </div>

                    <div className="flex justify-between items-center px-8 py-4 bg-white">
                        <div className="flex items-center gap-3 text-[.8rem]">
                            <Image src={foodsafetyCertificate2} width={80} alt=""/>
                            <div>
                                <h3 className="font-bold">Certificate of Completion</h3>
                                <p>Food safety</p>
                            </div>
                        </div>
                        <button>
                            <Link href={''} className="py-2 px-5 text-[.8rem] bg-highlightBg rounded-2xl">View</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}