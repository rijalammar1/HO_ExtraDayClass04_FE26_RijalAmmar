"use client"

import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

interface IProduct {
  id: number
  name: string
  price: number
  stock: number
}

export default function Page() {
  const router = useRouter()
  const supabase = createClient()

  const [product, setProduct] = useState<IProduct[]>([])

  const fetchProduct = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      alert("No session found")
      return
    }

    try {
      const { data, error } = await supabase.from("products").select("*")

      if (error) throw error

      setProduct(data || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div className="bg-white min-h-screen text-black p-10">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-3 gap-4">
        {product.map((item) => (
          <div key={item.id} className="bg-blue-500 p-4 text-white">
            <h1>{item.name}</h1>
            <p>Price: ${item.price}</p>
            <p>Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
