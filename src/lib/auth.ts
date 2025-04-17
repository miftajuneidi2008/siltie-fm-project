import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { db } from "./prisma";
import { DefaultSession } from "next-auth";

export type User = {
  isAdmin: boolean;
} & DefaultSession["user"];

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }

  interface JWT {
    isAdmin?: boolean;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(account?.provider);
      if (account?.provider === "google") {
        try {
          const users = await db.user.findUnique({
            where: {
              email: profile?.email as string,
            },
          });

          if (!users) {
             await db.user.create({
              data: {
                fullname: user.name as string,
                email: user.email as string,
                image: user.image as string,
              },
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await db.user.findUnique({
          where: {
            email: user.email as string,
          },
        });
        if (dbUser) {

          token.isAdmin = dbUser.isAdmin; // Include isAdmin in the token
        }
      }
      return token;
    },
    async session({ session, token }) {
    
      session.user.isAdmin = token.isAdmin as boolean; // Assert isAdmin as boolean
      return session;
    },
  },
});
    