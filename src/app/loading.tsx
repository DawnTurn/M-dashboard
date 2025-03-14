
export default function Loading() {
  return (
      <div className="w-full h-[75vh] bg-mainCardBg flex rounded-xl overflow-hidden">
            <div className="w-[30%] animate-pulse p-6">
                <div className="bg-navLinkBg w-full h-[18em] rounded-xl">

                </div>
                <div className="bg-navLinkBg w-full h-[2em] rounded-lg mt-4"></div>
                <div className="bg-navLinkBg w-full h-[2em] rounded-lg mt-4"></div>

                <div className="flex gap-4 mt-10">
                    <div className="bg-navLinkBg w-[70%] h-[1em] rounded-lg mt-4"></div>
                    <div className="bg-navLinkBg w-[30%] h-[1em] rounded-lg mt-4"></div>
                </div>

                <div className="flex gap-4 mt-2">
                    <div className="bg-navLinkBg w-[70%] h-[1em] rounded-lg mt-4"></div>
                    <div className="bg-navLinkBg w-[30%] h-[1em] rounded-lg mt-4"></div>
                </div>

                <div className="bg-navLinkBg w-[65%] h-[1em] rounded-lg mt-4"></div>
                <div className="bg-navLinkBg w-[75%] h-[1em] rounded-lg mt-4"></div>
                <div className="bg-navLinkBg w-[65%] h-[1em] rounded-lg mt-4"></div>
                <div className="bg-navLinkBg w-[50%] h-[1em] rounded-lg mt-4"></div>
            </div>

            <div className="w-[70%] pr-6 py-6 flex flex-col justify-between animate-pulse">
                <div className="bg-navLinkBg w-full h-[18em] rounded-lg"></div>
                <div className="bg-navLinkBg w-full h-[10em] rounded-lg"></div>
                <div className="bg-navLinkBg w-full h-[10em] rounded-lg"></div>
            </div>
        </div>
  );
}