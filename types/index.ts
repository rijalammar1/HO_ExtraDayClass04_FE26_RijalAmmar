export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export type User = {
  id: number
  name: string
  email: string
  username: string
}

export type Category = {
  id: number
  name: string
  description: string
}
