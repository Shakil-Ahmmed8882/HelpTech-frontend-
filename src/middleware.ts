import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/authService";


const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  user: [/^\/user-dashboard/],
  admin: [/^\/admin-dashboard/],
};

const generalProtectedRoutes = {
  admin: [/^\/post/],
  user:[/^\/post/] ,
};




// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  

  const user = await getCurrentUser()

  
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // if try to go route startwith post without login redirect 
  // first to login then let user go 
  if (user && user?.role) {
    const routes = generalProtectedRoutes[user?.role as Role];
    if (routes.some((route) => pathname.match(route))) {// start with /post 
      return NextResponse.next();
    }else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/post/:page*","/user-dashboard/:page*", "/admin-dashboard/:page*" , "/login", "/register"],
};




