import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
    return(
        <div className="flex items-center justify-between max-w-[1440px] px-7 pt-6 pb-12 mx-auto text-[.8rem]">
            <div className="flex gap-4">
               <button>
                     <Link href={''} className="flex gap-2 px-4 py-2 bg-navLinkBg items-center rounded-3xl">
                        <Image src={`/images/workspace.png`} alt="a workspace logo"></Image>
                        <span>Workspace</span>
                    </Link>
               </button>

                <button>
                    <Link href={''} className="flex gap-2 px-4 py-2 bg-navLinkBg items-center rounded-3xl">
                        <Image src={`/images/trainingLogo.png`} alt="a workspace logo"></Image>
                        <span>Training</span>
                    </Link>
                </button>

                <button>
                    <Link href={''} className="flex gap-2 px-4 py-2 bg-navLinkBg items-center rounded-3xl">
                        <Image src={`/images/certification.png`} alt="a workspace logo"></Image>
                        <span>Certification</span>
                    </Link>
                </button>
            </div>

            <div>
                <h1 className="text-3xl">Hello Msspace</h1>
            </div>

            <div className="flex gap-4">
                <button>
                    <Link href={''} className="flex gap-2 px-4 py-2 bg-navLinkBg items-center rounded-3xl">
                        <Image src={`/images/share.png`} alt="a workspace logo"></Image>
                        <span>Share</span>
                    </Link>
                </button>

                <button>
                    <Link href={''} className="flex gap-2 px-4 py-2 bg-navLinkBg items-center rounded-3xl">
                        <Image src={`/images/hire.png`} alt="a workspace logo"></Image>
                        <span>Hire Professionals</span>
                    </Link>
                </button>

               <button>
                     <Link href={''} className="flex gap-3 px-3 py-3 bg-navLinkBg rounded-full">
                        <Image src={`/images/message.png`} width={18}alt="a workspace logo"></Image>
                    </Link>
               </button>

                <button>
                    <Link href={''} className="flex gap-3 px-3 py-3 bg-navLinkBg rounded-full">
                        <Image src={`/images/User.png`} width={18} alt="a workspace logo"></Image>
                    </Link>
                </button>
            </div>
        </div>
    )
}