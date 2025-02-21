"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "react-image-crop/dist/ReactCrop.css";
import CropImage from "./CropImage";
import galleryLogo from "../../../public/images/galleryPng.png"
import addExperienceUpLogo from '../../../public/images/experienceUpLogo.png'
import addCertificateLogo from '../../../public/images/addCertificateLogo.png'
import foodSafetyCertificate from '../../../public/images/foodSafetyCertificate.png'

export default function EditProfileP(){
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [imageForCrop, setImageForCrop] = useState<string | null>(null);
    const [showCropModal, setShowCropModal] = useState(false);

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

    const [showSkillPopup, setShowSkillPopup] = useState(false);
    const [showExpertisePopup, setShowExpertisePopup] = useState(false);

    const [searchSkill, setSearchSkill] = useState("");
    const [searchExpertise, setSearchExpertise] = useState("");

    const skillPopupRef = useRef<HTMLDivElement>(null);
    const expertisePopupRef = useRef<HTMLDivElement>(null);

    const [availableSkills, setAvailableSkills] = useState([ 
        "Luxury Branding", 
        "Marketing", 
        "Sales", 
        "Business Strategy", 
        "Financial Analysis", 
        "Risk management", 
        "supply Chain Management"
    ]);

    const [availableExpertise, setAvailableExpertise] = useState([
        "Food Safety",
        "Risk Assessment Management",
        "Risk Management Assessment",
        "Quality Assurance",
        "Operations Management",
        "Performance Management",
    ]);

    const addNewSkill = (newSkill: string) => {
        setAvailableSkills((prev) => [...prev, newSkill]);
        setSelectedSkills((prev) => [...prev, newSkill]);
        setSearchSkill("");
    };

    const addNewExpertise = (newExpertise: string) => {
        setAvailableExpertise((prev) => [...prev, newExpertise]);
        setSelectedExpertise((prev) => [...prev, newExpertise]);
        setSearchExpertise("");
    };

    const filteredSkills = availableSkills.filter(skill =>
        skill.toLowerCase().includes(searchSkill.toLowerCase())
    );

    const filteredExpertise = availableExpertise.filter(exp =>
        exp.toLowerCase().includes(searchExpertise.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (skillPopupRef.current && !skillPopupRef.current.contains(event.target as Node)) {
                setShowSkillPopup(false);
            };
            if (expertisePopupRef.current && !expertisePopupRef.current.contains(event.target as Node)) {
                setShowExpertisePopup(false);
            };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleSkill = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    // Add or remove an expertise from registered list
    const toggleExpertise = (exp: string) => {
        setSelectedExpertise((prev) =>
        prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
        );
    };
    
    const onCropComplete = (croppedBlob: Blob) => {
        const croppedFile = new File([croppedBlob], "cropped.jpg", { type: "image/jpeg" });

        setProfileImage(URL.createObjectURL(croppedBlob));
        setSelectedFile(croppedFile);
        setShowCropModal(false);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageForCrop(imageUrl);
            setShowCropModal(true);
        }
    };

    return (
        <div className="w-[75%] rounded-xl overflow-y-auto h-[75vh] transition-all">
            <div className="p-8 bg-mainCardBg rounded-xl w-full">
                <h2 className="text-xl font-semibold mb-10">Custom Information</h2>

                <div className="flex items-center space-x-4 mb-6">
                    <label htmlFor="imageUpload">
                        <div className="w-[18em] h-[18em] bg-highlightBg rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col justify-center items-center gap-3">
                                    <Image src={galleryLogo} alt="a gallery upload logo"/>
                                    <span className="text-sm text-gray-500">Profile Image/Logo Upload</span>
                                </div>
                            )}
                        </div>
                    </label>
                    <input type="file" id="imageUpload" className="hidden" accept="image/*" onChange={handleImageChange} />
                </div>

                {/* Crop Modal */}
                {showCropModal && imageForCrop && (
                    <div className="fixed z-50 w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50">
                        <div className="w-[40%] h-[70vh] overflow-y-auto">
                            <div className="bg-mainCardBg p-4 rounded-2xl shadow-lg">
                                <CropImage src={imageForCrop} onComplete={onCropComplete} />
                                <div className="text-center">
                                    <button onClick={() => setShowCropModal(false)} className="mt-3 bg-red-500 text-white px-8 py-2 rounded-3xl">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full mb-6">
                    <h3 className="mb-2">About Me</h3>
                    <textarea name="about" id="about" className="w-full rounded-xl p-4 border-2 border-gray-300 transition-all focus:outline-none focus:border-2 focus:border-primaryNew/70" cols={30}></textarea>
                </div>

                {/* Skills Section */}
                <div className="mb-6 relative">
                    <h3 className="mb-2">Skills</h3>
                    <div className="bg-white flex items-center rounded-xl gap-6">
                        <button
                            onClick={() => setShowSkillPopup(!showSkillPopup)}
                            className="bg-highlightBg text-white px-3 py-1 rounded">
                            <i className="bx bx-plus text-gray-500 text-3xl p-4"></i>
                        </button>
                        <div className="flex items-center flex-wrap gap-2 mb-2">
                            {selectedSkills.map((skill, i) => (
                                <span key={i} className="bg-highlightBg text-gray-600 px-2 py-1 mt-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                   </div>

                    {/* Skills Modal */}
                    {showSkillPopup && (
                        <div className="fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/50 transition-all">
                            <div ref={skillPopupRef} className="mt-2 w-[400px] bg-highlightBg border rounded-xl shadow-lg py-6 px-8 transition-all">
                                <h4 className="font-bold mb-6">Select Skills</h4>

                                <div className="flex bg-white rounded-3xl items-center px-3 mb-2 gap-2">
                                    <i className="bx bx-search text-xl text-gray-400"></i>
                                    <input
                                        type="text"
                                        placeholder="search skills/add skills..."
                                        className="py-2 w-full focus:outline-none"
                                        value={searchSkill}
                                        onChange={(e) => setSearchSkill(e.target.value)}
                                    />
                                </div>

                                {/* Filter Skills */}
                                <ul className="max-h-72 overflow-y-auto flex flex-col gap-1">
                                    {availableSkills.filter(skill => skill.toLowerCase().includes(searchSkill.toLowerCase()))
                                        .map((skill, i) => (
                                            <li key={`${skill}-${i}`}>
                                                <button
                                                    onClick={() => toggleSkill(skill)}
                                                    className={`w-full text-left px-4 py-3 text-sm rounded hover:bg-primaryNew/75 hover:text-white transition-all ${
                                                        selectedSkills.includes(skill) ? "bg-primaryNew text-white" : ""
                                                    }`}
                                                >
                                                    {skill}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <div className="text-center">
                                    {searchSkill && 
                                        !availableSkills.some(skill => skill.toLowerCase() === searchSkill.toLowerCase()) && filteredSkills.length === 0 && (
                                        <button 
                                            onClick={() => addNewSkill(searchExpertise)} 
                                            className=" bg-primaryNew text-white px-8 py-3 rounded-3xl text-center mb-2"
                                        >
                                            Add <span className="font-bold">{searchSkill}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Expertise Section */}
                <div className="mb-6 relative">
                    <h1 className="text-3xl mb-6">Career and Expertise</h1>
                    <h3 className="mb-2">Add Expertise</h3>
                    
                    <div className="bg-white flex items-center rounded-xl gap-6">
                        <button
                            onClick={() => setShowExpertisePopup(!showExpertisePopup)}
                            className="bg-highlightBg text-white px-3 py-1 rounded">
                                <i className="bx bx-plus text-gray-500 text-3xl p-4"></i>
                        </button>

                        <div className="flex flex-wrap gap-2 mb-2">
                            {selectedExpertise.map((exp) => (
                                <span key={exp} className="bg-highlightBg text-gray-600 px-2 py-1 mt-1 rounded">
                                    {exp}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Expertise Modal */}
                    {showExpertisePopup && (
                        <div className="fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/50 transition-all">
                            <div ref={expertisePopupRef} className="mt-2 w-[400px] bg-highlightBg border rounded-xl shadow-lg py-6 px-8 transition-all">
                                <h4 className="font-bold mb-6">Select Expertise</h4>
                                 
                                <div className="flex bg-white rounded-3xl items-center px-3 mb-2 gap-2">
                                    <i className="bx bx-search text-xl text-gray-400"></i>
                                    <input
                                        type="text"
                                        placeholder="search expertise/add expertise..."
                                        className="py-2 w-full focus:outline-none"
                                        value={searchExpertise}
                                        onChange={(e) => setSearchExpertise(e.target.value)}
                                    />
                                </div>

                                <ul className="max-h-72 overflow-y-auto flex flex-col gap-1">
                                    {availableExpertise.filter(exp => exp.toLowerCase().includes(searchExpertise.toLowerCase())).map((exp, i) => (
                                        <li key={`${exp}-${i}`}>
                                            <button
                                                onClick={() => toggleExpertise(exp)}
                                                    className={`w-full text-left px-4 py-3 text-sm rounded hover:bg-primaryNew/75 hover:text-white transition-all ${
                                                    selectedExpertise.includes(exp) ? "bg-primaryNew text-white" : ""
                                                }`}>
                                                {exp}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center">
                                    {searchExpertise && 
                                        !availableExpertise.some(exp => exp.toLowerCase() === searchExpertise.toLowerCase()) && filteredExpertise.length === 0 && (
                                        <button 
                                            onClick={() => addNewExpertise(searchExpertise)} 
                                            className=" bg-primaryNew text-white px-8 py-3 rounded-3xl te xt-center mb-2"
                                        >
                                            Add <span className="font-bold">{searchExpertise}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-10 mt-12">
                    {/* add experience */}
                    <div className="w-1/2">
                        <div className="w-full flex flex-col gap-2 justify-center items-center h-[12em] bg-white rounded-2xl cursor-pointer">
                            <Image src={addExperienceUpLogo} alt="experience logo" width={50}/>
                            <p className="text-sm">Add Experience</p>
                        </div>
                        <div className="w-[90%] px-4 mx-auto mt-6 flex items-center gap-6">
                            <div className="text-sm">
                                <div className="flex justify-between mb-2">
                                    <div>
                                        <h3 className="font-bold">Food Safety Trainer</h3>
                                        <p>Cway Nigeria</p>
                                    </div>
                                    <p>2 years</p>
                                </div>
                                <p className="text-[.7rem]">Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC, making it 
                                    over 2000 years old. 
                                </p>
                            </div>
                            <div>
                                <i className="bx bx-x text-3xl text-gray-500 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>

                    {/* add certificate */}
                    <div className="w-1/2">
                        <div className="w-full flex flex-col gap-2 justify-center items-center h-[12em] bg-white rounded-2xl cursor-pointer">
                            <Image src={addCertificateLogo} alt="experience logo" width={50}/>
                            <p className="text-sm">Add Certificate</p>
                        </div>

                        <div>
                            <div className="flex justify-between items-center px-8 py-4 ">
                                <div className="flex items-center gap-6 text-[.8rem]">
                                    <Image src={foodSafetyCertificate} width={80} alt=""/>
                                    <div>
                                        <h3 className="font-bold">Certificate of Completion</h3>
                                        <p>Food safety</p>
                                    </div>
                                </div>

                                <div>
                                    <i className="bx bx-x text-3xl text-gray-500 cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="bg-primaryNew text-white px-16 py-4 rounded-3xl">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}