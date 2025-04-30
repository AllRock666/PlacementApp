import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const publicPaths = ["/", "/login", "/register"]
  const isPublicPath = publicPaths.includes(path) || path.startsWith("/api/")

  if (isPublicPath) {
    return NextResponse.next()
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  // Redirect to login if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Check role-based access
  if (path.startsWith("/dashboard/student") && token.role !== "student") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (path.startsWith("/dashboard/faculty") && token.role !== "faculty") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (path.startsWith("/dashboard/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all routes except for:
     * - _next (Next.js internals)
     * - api (API routes)
     * - static files (e.g. favicon.ico)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
