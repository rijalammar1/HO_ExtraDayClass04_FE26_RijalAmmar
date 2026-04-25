import { notFound } from "next/navigation"
import { NextResponse } from "next/server"

type Meta = Record<string, unknown>

export const apiResponse = {
  success<T>(data: T, meta?: Meta) {
    return NextResponse.json({
      success: true,
      data,
      meta: meta ?? {},
    })
  },

  error(message: string, status: number = 400) {
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status },
    )
  },

  notFound(message: string = "Data not found") {
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 404 },
    )
  },

  serverError(message: string = "Internal server error") {
    return NextResponse.json(
      {
        status: false,
        message,
      },
      { status: 404 },
    )
  },
}
