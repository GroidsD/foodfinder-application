import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { createHash } from "crypto";

const createUserId = (base: string): string => {
    return createHash("sha256").update(base).digest("hex");
};

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,   
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (token?.email && !token.fdlst_private_userId) {
                token.fdlst_private_userId = createUserId(token.email);
            }
            return token;
        },
        async session({ session, user, token }) {
            if (session?.user?.email && !session?.user.fdlst_private_userId) {
                session.user.fdlst_private_userId = createUserId(session?.user?.email);
            }
            return session;
        },
    },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
