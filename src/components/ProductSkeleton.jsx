export default function ProductSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-4 border rounded-lg shadow-sm bg-white">
      <div className="h-48 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-6 bg-gray-300 rounded w-1/4 mt-4"></div>
    </div>
  );
}