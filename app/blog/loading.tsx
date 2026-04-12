export default function BlogLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="mt-2 h-5 w-48 bg-gray-100 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border p-6 space-y-3
                       animate-pulse"
          >
            <div className="h-4 w-12 bg-teal-100 rounded-full" />
            <div className="h-6 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
