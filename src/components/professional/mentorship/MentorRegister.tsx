import Link from "next/link"

export default function MentorRegister(){
    return (
        <div className="bg-white rounded-3xl flex p-3 items-center w-full gap-4">
            <div className="px-5 py-3 flex items-center justify-between bg-highlightBg text-gray-400 rounded-3xl w-[34%]">
                <p className="text-[.8rem]">Experience</p>
                <i className="bx bx-chevron-right text-2xl"></i>
            </div>

            <div className="px-5 py-3 flex items-center justify-between bg-highlightBg text-gray-400 rounded-3xl w-[22%]">
                <p className="text-[.8rem]">Rank</p>
                <i className="bx bx-chevron-right text-2xl"></i>
            </div>

            <div className="px-5 py-3 flex items-center justify-between bg-highlightBg text-gray-400 rounded-3xl w-[22%]">
                <p className="text-[.8rem]">Skills</p>
                <i className="bx bx-chevron-right text-2xl"></i>
            </div>

            <div className="bg-primaryNew rounded-3xl text-center w-[22%]">
                <Link href={''}>
                    <button className="py-4 px-5 text-[.8rem] text-white">
                        Become a Mentor
                    </button>
                </Link>
            </div>
        </div>
    )
}