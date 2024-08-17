import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const { email, password, username } = await req.json()
        const hashedPassword = await hash(password, 10)
        
        if(!password || !email){
            return new NextResponse("Missing Fields", { status: 400 })
        }

        const user = await db.user.create({
            data: {
                email,
                hashedPassword,
                username
            }
        })

        return NextResponse.json(user)

    }catch(e){
        console.error(e)
        return new NextResponse("Internal Error", { status: 500 })
    }
}