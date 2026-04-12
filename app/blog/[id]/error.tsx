"use client" // error.tsx WAJIB client component

export default function Error({
  error,

  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">
        Oops! Terjadi Kesalahan
      </h2>
      <p className="mt-2 text-gray-500">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 bg-teal-600 text-white px-6 py-3
                   rounded-full font-medium hover:bg-teal-700"
      >
        Coba Lagi
      </button>
    </div>
  )
}
