import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface MentorCardProps {
    imageSRC: StaticImageData;
    name: string;
    title: string;
    description: string;
}

export default function MentorCard({imageSRC, name, title, description}: MentorCardProps) {
    
    return (
        <div className="relative h-[24em] basis-1/4 flex-1 overflow-hidden rounded-lg">
            <div className="h-full bg-linear z-50 relative text-white flex flex-col justify-end px-5 py-4">
                <h2 className="text-xl font-bold leading-tight">{name}</h2>
                <p className="leading-[8px] pb-3 text-sm ">{title}</p>
                <p className="text-[.7rem] pb-3 leading-tight">{description}</p>
                <Link 
                    href={'/professional/profile'}
                    className="w-full text-center text-[.7rem]"
                >
                    View Profile
                </Link>
            </div>
            <Image 
                src={imageSRC} 
                alt="a mentors profile picture" 
                className="absolute top-0 left-0 h-full w-full object-cover"
            />
        </div>
    )
}