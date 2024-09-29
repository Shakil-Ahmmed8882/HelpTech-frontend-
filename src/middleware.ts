/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";


const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  

  //pathname , acessToken

  //pathname = admin-dashboard -> accessToken = admin -> admin-dashboard &&
  //pathname = admin-dashboard -> accessToken = user -> home page

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    //not login && want navigate the auth routes?
    // system will let you go
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // not login && want navigate the protected routes?
    // system will redirect you to login page
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  //Role based authorization
  const user = await getCurrentUser()
  const role = user?.role;

  // are you user? yes && also you wanna navigate 
  // user-dashboard right? yes ->
  // if both are yes system will let you go
  if (role === "user" && pathname.match(/^\/user-dashboard/)) {
    return NextResponse.next();
  }


  // are you admin? yes && also you wanna navigate 
  // admin-dashboard right? yes ->
  // if both are yes system will let you go
  if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
    return NextResponse.next();
  }


  if (role === "user" && pathname === "/profile") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));

  //decodedToken.role
}

//!accessToken -> /login -> jete dao

// export const config = {
//   matcher: [
//     "/login",
//     "/register",
//     "/dashboard/:page*",
//     "/admin-dashboard/:page*",
//   ],
// };
export const config = {
  matcher: [],
};

//public - cars
//private - admin, driver, user
//hybrid - login, register

//middleware.ts (dashboard, admin-dashboard) -> layout.tsx -> page.tax / dashboard/page.tsx