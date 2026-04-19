import { createServerSupabaseClient } from "@/lib/supabase/server"

export default async function PostsPage() {
  const supabase = await createServerSupabaseClient()

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) return <p>Error: {error.message}</p>

  return (
    <ul className="space-y-4 p-6">
      {posts?.map((post) => (
        <li key={post.id} className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p className="text-gray-500">{post.content}</p>
        </li>
      ))}
    </ul>
  )
}
