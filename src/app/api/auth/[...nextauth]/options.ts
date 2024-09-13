import { userCreate } from "@/db/find";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRETS as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token.sub) await userCreate(token, session);
      return session;
    },
  },
};
