import Image from 'next/image'
import msSpaceLogo from '../../public/images/msspace.png'

export default function Nav(){
    return (
        <div className='w-full bg-white sticky top-0 shadow-lg'>
            <div className='flex justify-between items-center max-w-[1440px] mx-auto px-7 py-6'>
                <Image src={msSpaceLogo} width={140} alt="a logo of MSSPACE"/>

                <ul className='flex gap-10 font-light text-[.9rem]'>
                    <li><a href="#">Certification</a></li>
                    <li><a href="#">Mentorship</a></li>
                    <li><a href="#">Professional</a></li>
                    <li><a href="#">Learning</a></li>
                </ul>

                <a href="#" className='flex items-center bg-backgroundNew py-1 ps-6 pe-4 rounded-3xl text-sm'>
                    Msspace
                    <i className="bx bx-chevron-right text-2xl"></i>
                </a>
            </div>
        </div>
    )
}

