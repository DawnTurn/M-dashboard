import Image from "next/image";
import expertiseIcon from "../../../public/images/expertiseIcon.svg";

interface ExpertiseProps {
    onExpertiseOpenModal: () => void; // Function to open modal
}

export default function Expertise({ onExpertiseOpenModal }: ExpertiseProps) {
    return (
        <div className="w-[45%]">
            <div className="w-full flex justify-between items-center mb-5">
                <h2>Scope of Expertise</h2>

                {/* Call onOpenModal when button is clicked */}
                <button className="cursor-pointer" onClick={onExpertiseOpenModal}>
                    View
                </button>
            </div>

            <div className="w-full text-[.8rem] flex flex-col gap-3">
                {["Food Safety", "Risk Management and Assessment", "Performance Management"].map((title) => (
                    <div key={title} className="w-full flex items-center gap-3 bg-highlightBg px-3 py-2 rounded-3xl">
                        <Image src={expertiseIcon} width={30} alt="" />
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
