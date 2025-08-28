import { NextRequest, NextResponse } from 'next/server'
import { DASHBOARD, LOGIN, ROUTE_SECURE } from './utils/constants/routeName';

export default function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('access_token_gnawalma')?.value;
    const pathname = request.nextUrl.pathname;

    if(currentUser){
        if(pathname === "/"){
            return NextResponse.redirect(new URL(DASHBOARD, request.url))
        }
        return NextResponse.next();
    }else{
        if(ROUTE_SECURE.some((route) => pathname.startsWith(route))){
            if(!currentUser){
                return NextResponse.redirect(new URL(LOGIN, request.url))
            }
            return NextResponse.next();
        }
    }
    return NextResponse.next();
}
