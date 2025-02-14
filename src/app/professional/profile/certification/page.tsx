import Nav from '@/components/Nav'
import NavBar from '@/components/NavBar/NavBar'
import SideBar from '@/components/SideBar/SideBarCard'
import Image from 'next/image'
import certificateLargeView from '../../../../../public/images/CetificateLargeView.png'

export default function Certificate() {
    return(
        <div className='bg-background h-screen pb-10'>
            <div className="w-full bg-map">
                <Nav />
                <NavBar />
                <div className="flex px-7 gap-8 max-w-[1440px] mx-auto">
                    <SideBar />

                    <div className='w-[75%] bg-white p-10  px-12 rounded-2xl h-[75vh] overflow-y-auto'>
                        <h1 className='text-bold text-4xl'>Certificate of Completion</h1>
                        <h3 className='text-2xl'>Food Safety</h3>

                        <div className='h-[70vh] mt-6'>
                            <Image src={certificateLargeView} width={800} alt='Food certificate image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}