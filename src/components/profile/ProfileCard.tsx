import Image from "next/image"
import profilePic from '../../../public/images/profilePic.png'
import markedStar from '../../../public/images/markedStar.png'
import star from '../../../public/images/star.png'

export default function ProfileCard() {
    return (
        <div className="w-[25%]">
            <Image src={profilePic} alt="a profile picture"></Image>
            <h1>Feyisara Ogunranti</h1>
            <h3>Consultant</h3>

            <div>
                <p>rank</p>
                <div>
                    <span>Expert</span>
                    <div className="flex items-center gap-2">
                        <Image src={star} alt="an empty star rating"></Image>
                        <Image src={star} alt="an empty star rating"></Image>
                        <Image src={star} alt="an empty star rating"></Image>
                        <Image src={markedStar} alt="a marked star rating"></Image>
                        <Image src={star} alt="an empty star rating"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

