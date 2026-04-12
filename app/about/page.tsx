import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Tentang NextBlog",
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Tentang NextBlog
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        NextBlog adalah platform blog modern yang dibangun dengan Next.js 14 App
        Router, TypeScript, dan Tailwind CSS.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed">
        Dibuat sebagai bahan praktek Extra Class 3 - React Bootcamp 2025.
      </p>
    </div>
  )
}
