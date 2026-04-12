export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-12 h-12 rounded-full border-4 border-teal-200
                        border-t-teal-600 animate-spin mx-auto"
        />
        <p className="mt-4 text-gray-500">Memuat...</p>
      </div>
    </div>
  )
}
