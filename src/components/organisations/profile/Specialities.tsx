import Image from "next/image"
import brandingIcon from '../../../../public/images/brandingLogo.png'
import campaignIcon from '../../../../public/images/campaignLogo.png'
import advertsIcon from '../../../../public/images/advertsLogo.png'
import eventsIcon from '../../../../public/images/eventsLogo.png'

export default function Specialities(){
    
    return(
        <div className="py-10">
            <h1 className="text-xl mb-6">Specialities</h1>
            <div className="text-[.75rem] text-white text-center flex justify-between">
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-auditingBg rounded-xl">
                    <Image src={brandingIcon} width={20} alt="An auditing icon"/>
                    <p>Luxury branding</p>
                </div>
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-leadershipBg rounded-xl">
                    <Image src={campaignIcon} width={20} alt="A leadership icon"/>
                    <p>Campaign</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center w-[12em] py-3 bg-teamBg rounded-xl">
                    <Image src={advertsIcon} width={20} alt="A team management icon"/>
                    <p>Adverts</p>
                </div>
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-pSolvingBg rounded-xl">
                    <Image src={eventsIcon} width={25} alt="A problem solving icon"/>
                    <p>Events</p>
                </div>
            </div>
        </div>
    )
}