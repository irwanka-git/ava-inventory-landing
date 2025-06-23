import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    return NextResponse.next();
    // // Get the Referer header from the request
    // const host = request.headers.get('host');
    // // Define the allowed domain
    // // console.log(host);
    // const ALLOW_DOMAIN = process.env.ALLOW_DOMAIN_ACCESSS || "";
    // const allow_split = ALLOW_DOMAIN.split("##");
    // if (host){
    //     if (allow_split.includes(host)){
    //         return NextResponse.next();
    //     }
    // }
    // return new NextResponse('Access forbidden', { status: 403 });
    // // return new NextResponse('Access forbidden', { status: 403 });
    // // Allow the request to proceed
}

// Apply middleware to specific routes
export const config = {
    matcher: '/:path*', // Apply to all routes under /protected
};