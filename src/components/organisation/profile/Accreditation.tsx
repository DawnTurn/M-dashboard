import Image from "next/image"
import buildasLogo from "../../../../public/images/buildasLogo.svg"
import coolcallLogo from "../../../../public/images/coolcall-logo.svg"

export default function Accreditation(){
    return(
        <div>
            <h1 className="font-bold text-sm mb-4">Accreditations</h1>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Image src={buildasLogo} alt="Buildas Logo" width={55} />
                    <div>
                        <h2 className="font-bold text-[.75em]">Buildas Limited</h2>
                        <p className="text-[.75em]">Construction Company</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Image src={coolcallLogo} alt="Buildas Logo" width={55} />
                    <div>
                        <h2 className="font-bold text-[.75em]">Coolcall</h2>
                        <p className="text-[.75em]">Customer Relations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}