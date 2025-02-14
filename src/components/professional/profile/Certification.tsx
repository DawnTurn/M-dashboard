import Image from "next/image"
import foodCertificateImg from "../../../../public/images/foodCertificate.png"
import qualityCertificationImg from "../../../../public/images/qualityCertificate.png"
import food2CertificateImg from "../../../../public/images/food2Certificate.png"

interface CertificationProps{
    onCertificationOpenModal: () => void;
}

export default function Certification({onCertificationOpenModal}: CertificationProps) {
    return(
        <div className="w-[45%]">
            <div className="w-full flex justify-between items-center mb-5 px-4">
                <h2>Certification</h2>

                <button 
                    className="cursor-pointer text-sm"
                    onClick={onCertificationOpenModal}
                >
                    View
                </button>
            </div>

            <div className="w-full text-[.8rem] flex flex-col gap-3">
                <div className="w-full flex items-center gap-3 px-3 py-1 rounded-3xl">
                    <Image src={foodCertificateImg} width={40} alt=""/>
                    <div>
                        <p className="text-[.8rem]">Certificate of Completion</p>
                        <span className="text-[.7rem]">Food Safety</span>
                    </div>
                </div>
                <div className="w-full flex items-center gap-3 px-3 py-1 rounded-3xl">
                    <Image src={qualityCertificationImg} width={40} alt=""/>
                    <div>
                        <p className="text-[.8rem]">Certificate of Completion</p>
                        <span className="text-[.7rem]">Quality Management System</span>
                    </div>
                </div>
                <div className="w-full flex items-center gap-3 px-3 py-1 rounded-3xl">
                    <Image src={food2CertificateImg} width={40} alt=""/>
                    <div className="flex flex-col">
                        <p className="text-[.8rem]">Certificate of Completion</p>
                        <span className="text-[.7rem]">Food Safety</span>
                    </div>
                </div>
            </div>
        </div>
    )
}