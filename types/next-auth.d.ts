import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
      studentId?: string
      department?: string
      image?: string
    }
  }

  interface User {
    id: string
    name: string
    email: string
    role: string
    studentId?: string
    department?: string
    image?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
    studentId?: string
    department?: string
  }
}
