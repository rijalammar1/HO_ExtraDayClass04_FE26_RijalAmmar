import { z } from "zod"
import { NextResponse } from "next/server"
import { apiResponse } from "@/lib/api/response"
import { prisma } from "@/lib/db/prisma"

const todoSchema = z.object({
  title: z.string().min(1, "Wajib diisi").max(100),
  completed: z.boolean().default(false),
})

// GET - publik
export async function GET() {
  const todos = await prisma.todos.findMany({
    orderBy: { id: "desc" },
  })

  return apiResponse.success(todos, { total: todos.length })
}
