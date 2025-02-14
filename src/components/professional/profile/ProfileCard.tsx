import Image from "next/image"
import profilePic from '../../../../public/images/profilePic.png'
import markedStar from '../../../../public/images/markedStar.png'
import star from '../../../../public/images/star.png'
import Experience from "@/components/professional/profile/Experience"

export default function ProfileCard() {
    return (
        <div className="w-[25%]">
            <div className="text-center mb-6">
                <Image src={profilePic} alt="a profile picture"></Image>
                <h1 className="text-2xl pt-4">Feyisara Ogunranti</h1>
                <h3 className="text-sm">Consultant</h3>
            </div>

            <div className="flex justify-between py-2 px-3 items-center bg-white rounded-md">
                <p>Rank</p>
                <div className="flex items-center gap-2">
                    <span className="text-[.8rem] text-expertColor">Expert</span>
                    <div className="flex items-center gap-1">
                        <Image src={star} width={15} alt="an empty star rating"></Image>
                        <Image src={star} width={15} alt="an empty star rating"></Image>
                        <Image src={star} width={15} alt="an empty star rating"></Image>
                        <Image src={markedStar} width={15} alt="a marked star rating"></Image>
                        <Image src={star} width={15} alt="an empty star rating"></Image>
                    </div>
                </div>
            </div>

            <div className="h-[1px] w-full bg-gray-400 my-10"></div>

            <Experience/>
        </div>
    )
}

