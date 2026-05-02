"use client"

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useState } from "react"

export default function Login() {
  const supabase = createClient()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
      alert("email and password must be filled")
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("ERROR:", error.message)
    } else {
      console.log("ACCESS TOKEN:", data.session?.access_token)
      alert("Login Success")
    }
  }

  return (
    <div className="space-y-3 p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Login</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-lg"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 border rounded-lg"
      />

      <button
        onClick={handleLogin}
        className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
      >
        Login
      </button>
      <Link
        href="/auth/register"
        className="block text-center text-teal-500 hover:underline"
      >
        Don't have an account? Register
      </Link>
    </div>
  )
}
