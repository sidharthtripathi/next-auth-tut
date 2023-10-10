import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client"
import { NextAuthOptions } from 'next-auth'
import { create } from 'domain'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()
export const options : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                email : {label : "email", type : "email", placeholder :"email"},
                password : {label : "password", type : "password", placeholder :"password"}
            },
            async authorize(credentials,req){
                // check if user is valid, if valid return user else null
                
                if(!(credentials?.email && credentials?.password)) return null;
                const user = await prisma.user.findUnique({
                    where : {
                        email : credentials?.email
                    }
                })
                if(!user) return null;
                const passMatch = await bcrypt.compare(credentials?.password!,user.hashedPassword!)

                return passMatch ? user : null

            }
        })
    ],
    session : {
        strategy : "jwt"
    }
}
