import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MentorInfoProps {
    mentor: {
        name: string;
        image: StaticImageData;
        title: string;
        description: string;
    } | null;
}

export default function MentorInfo({ mentor }: MentorInfoProps) {
    if (!mentor) return null; // Hide when no mentor is selected

    return (
        <div className="bg-white w-[25%] rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
                <Image 
                    src={mentor.image} 
                    alt={`${mentor.name}'s profile picture`} 
                    className="rounded-full w-32 h-32 object-cover object-top"
                />
                <h2 className="text-xl mt-3">{mentor.name}</h2>
                <button className="mt-8">
                    <Link href={`/professional/mentorship/book-mentor`} className="bg-highlightBg text-sm font-normal px-10 py-3 rounded-3xl">
                        Book Mentor
                    </Link>
                </button>
                <p className="text-orange-500 text-sm mt-4">$200/per session</p>
            </div>
            <div className="mt-6">
                <div>
                    <h2 className="font-bold">Experience</h2>
                    <p className="text-[.75rem] mt-1 font-light">
                        Let's make the right match. Fill out the form to explore 
                        talent or opportunities that align perfectly with your goals
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className="font-bold">Skills</h2>
                    <div className="text-[.75rem] mt-2 flex flex-col gap-2">
                        <p>Auditing</p>
                        <p>Leadership</p>
                        <p>Team Management</p>
                        <p>Problem Solving</p>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="font-bold mb-2">Certification</h2>
                    <div className="text-[.75rem] flex flex-col gap-2">
                        <div>
                            <h3>Certification Of Completion</h3>
                            <p className="font-light">Food Safety</p>
                        </div>
                        <div>
                            <h3>Certification Of Completion</h3>
                            <p className="font-light">Food Safety</p>
                        </div>
                        <div>
                            <h3>Certification Of Completion</h3>
                            <p className="font-light">Food Safety</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
