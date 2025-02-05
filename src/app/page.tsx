import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
       <div className="text-center">
          <h1 className="text-5xl mb-9">WELCOME To MSSPACE</h1>
          <Link href='/profile'>
            <button className="px-4 py-2 bg-downloadBtnBg rounded-lg text-white text-xl">Go to Dashboard</button>
          </Link>
       </div>
    </div>
  );
}
