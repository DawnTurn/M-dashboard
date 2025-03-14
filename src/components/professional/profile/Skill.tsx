import Image from "next/image"
import auditIcon from '../../../../public/images/auditIcon.png'
import leadershipIcon from '../../../../public/images/LeaderShipIcon.png'
import teamIcon from '../../../../public/images/teamIcon.png'
import pSolvingIcon from '../../../../public/images/pSolvingIcon.png'

export default function Skill(){
    return(
        <div className="py-8">
            <h1 className="text-2xl mb-6">Skills</h1>
            <div className="text-[.75rem] text-white text-center flex justify-between">
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-auditingBg rounded-xl">
                    <Image src={auditIcon} width={20} alt="An auditing icon"/>
                    <p>Auditing</p>
                </div>
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-leadershipBg rounded-xl">
                    <Image src={leadershipIcon} width={20} alt="A leadership icon"/>
                    <p>Leadership</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center w-[12em] py-3 bg-teamBg rounded-xl">
                    <Image src={teamIcon} width={20} alt="A team management icon"/>
                    <p>Team Management</p>
                </div>
                <div className="flex flex-col gap-2 items-center py-3 justify-center w-[12em]  bg-pSolvingBg rounded-xl">
                    <Image src={pSolvingIcon} width={25} alt="A problem solving icon"/>
                    <p>Problem Solving</p>
                </div>
            </div>
        </div>
    )
}