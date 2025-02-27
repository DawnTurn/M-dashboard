"use client";
import Image from "next/image";
import cancelLogo from "../../../../public/images/cancel.svg";
import expertiseLogo from "../../../../public/images/expertiseIcon.svg";
import chevronDown from "../../../../public/images/chevronDown.svg";
import chevronRight from "../../../../public/images/rightArrow.svg";
import { useState } from "react";

interface ExpertiseModalProps {
    onExpertiseClose: () => void; // Function to close modal
}

export default function ExpertiseModal({ onExpertiseClose }: ExpertiseModalProps) {
    const [show, setShow] = useState<{ [key: string]: boolean }>({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
    });

    const toggleDropdown = (key: string) => {
        setShow((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const dropDownProps = [
        { key: "first", title: "Food Safety" },
        { key: "second", title: "Risk Management and Assessment" },
        { key: "third", title: "Performance Management" },
        { key: "fourth", title: "Risk Management" },
        { key: "fifth", title: "Performance Management" },
    ];

    return (
        <div className="fixed w-full h-screen flex items-center bg-black/40 justify-center overflow-y-auto">
            <div className="w-[400px] bg-mainCardBg/80 backdrop-blur-[3px] py-6 rounded-xl">
                <div className="px-4">
                    <div className="flex justify-end">
                        <Image 
                            src={cancelLogo} 
                            alt="Close" 
                            className="cursor-pointer" 
                            onClick={onExpertiseClose} 
                        />
                    </div>
                    <p className="py-6 font-bold">Scope of Expertise</p>
                </div>

                {dropDownProps.map(({ key, title }) => (
                    <div key={key} className="bg-white mb-[2px]">
                        <div className="text-[.8rem] px-8 py-4">
                            <div 
                                className="flex justify-between items-center cursor-pointer" 
                                onClick={() => toggleDropdown(key)}
                            >
                                <div className="flex items-center gap-2">
                                    <Image src={expertiseLogo} width={30} alt="" />
                                    <h3 className="font-bold">{title}</h3>
                                </div>
                                <Image 
                                    src={show[key] ? chevronDown : chevronRight} 
                                    width={10} 
                                    alt="Toggle" 
                                />
                            </div>
                            {show[key] && (
                                <div className="mt-5">
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in classical Latin literature from 45 BC.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
