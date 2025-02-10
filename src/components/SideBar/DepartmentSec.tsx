import Image from "next/image"
import chevronRight from "../../../public/images/chevronRightBg.svg"
import Link from "next/link"

export default function DepartmentSec(){
    return (
        <div className="pt-10">
            <div className="w-full flex justify-between items-center mb-5">
                <h2>Department</h2>

                <button className="cursor-pointer">
                    View
                </button>
            </div>

            <div className="flex flex-col gap-4 px-2">
                <Link href={''}>
                    <button className="rounded-3xl bg-white py-4 px-6 w-full flex items-center justify-between">
                        <p className="text-sm">Finance</p>
                        <Image src={chevronRight} width={20} alt=""/>
                    </button>
                </Link>

                <Link href={''}>
                    <button className="rounded-3xl bg-white py-4 px-6 w-full flex items-center justify-between">
                        <p className="text-sm">Audit</p>
                        <Image src={chevronRight} width={20} alt=""/>
                    </button>
                </Link>

                <Link href={''}>
                    <button className="rounded-3xl bg-white py-4 px-6 w-full flex items-center justify-between">
                        <p className="text-sm">Gap Analysis</p>
                        <Image src={chevronRight} width={20} alt=""/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

