import Image, { StaticImageData } from "next/image"

interface TestimonialCard{
    imageSRC: StaticImageData;
    headerName: string;
    paragraph: string;
    borderColor: string;
}

const TestimonialCard = ({imageSRC, headerName, paragraph, borderColor}: TestimonialCard) => {
    
    return (
        <div className={`flex gap-4 min-w-[55%] items-center rounded-xl bg-white shadow-xl py-6 px-6 border-l-8 snap-start ${borderColor}`}>
            <Image src={imageSRC} width={160} alt="Profile picture"/>
            <div>
                <h3 className="text-sm font-bold">{headerName}</h3>
                <p className="text-[.75rem]">{paragraph}</p>
            </div>
        </div>
    )
}

export default TestimonialCard