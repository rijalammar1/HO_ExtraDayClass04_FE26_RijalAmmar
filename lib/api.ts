import { Post, User } from "@/types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

// Ambil semua artikel
export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 3600 }, // Cache 1 jam, ISR
  })
  if (!res.ok) throw new Error("Gagal mengambil data artikel")
  return res.json()
}

// Ambil satu artikel berdasarkan ID
export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error("Artikel tidak ditemukan")
  return res.json()
}

// Ambil artikel berdasarkan userId (simulasi kategori)
export async function getPostsByUserId(userId: string): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error("Gagal mengambil artikel kategori")
  return res.json()
}

// Ambil info user (penulis)
export async function getUserById(id: number): Promise<User | null> {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      console.warn("User tidak ditemukan:", id)
      return null
    }

    return res.json()
  } catch (error) {
    console.error("Error fetch user:", error)
    return null
  }
}
