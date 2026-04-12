import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-teal-300">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Artikel Tidak Ditemukan
      </h2>
      <p className="mt-2 text-gray-500">
        Artikel yang kamu cari tidak ada atau sudah dihapus.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block bg-teal-600 text-white
                   px-6 py-3 rounded-full font-medium hover:bg-teal-700"
      >
        Kembali ke Blog
      </Link>
    </div>
  )
}
