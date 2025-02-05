export default function Loading() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-48 bg-gray-300 rounded mt-4"></div>
        <div className="h-3 w-32 bg-gray-300 rounded mt-2"></div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}