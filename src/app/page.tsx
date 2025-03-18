import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-backgroundNew">
        <div className="text-center">
          <h1 className="text-5xl mb-9">WELCOME To MSSPACE</h1>
          <Link href='/professional/profile'>
            <button className="px-4 py-2 bg-primaryNew rounded-lg text-white text-xl">Go to Dashboard</button>
          </Link>
       </div>
    </div>
  );
}
