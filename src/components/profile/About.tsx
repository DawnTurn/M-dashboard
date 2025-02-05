import Image from "next/image"
import Link from "next/link"
import editIcon from '../../../public/images/editIcon.png'
import Skill from "@/components/profile/Skill"
import Experience from "@/components/profile/Experience"

export default function About() {
    return (
        <div className="bg-white w-[75%] rounded-xl px-6 py-4">
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm">Public View</p>
                <button>
                    <Link href={''} className="bg-primary flex gap-2 items-center px-4 py-2 rounded-3xl">
                        <Image src={editIcon} width={12} alt=""/>
                        <a className="text-[.7rem] text-white">Edit Profile</a>
                    </Link>
                </button>
            </div>

            <div>
                <h2 className="text-xl mb-4">About me</h2>
                <p className="text-sm mb-12">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin 
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                    the word in classical literature, discovered the undoubtable source. Lorem Ipsum 
                    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the 
                </p>
            </div>

            <div className="h-[2px] w-full bg-gray-200"></div>

            <Skill/>

            <div className="h-[2px] w-full bg-gray-200"></div>

            <Experience/>
        </div>
    )
}