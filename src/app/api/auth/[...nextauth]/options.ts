import { userCreate } from "@/db/find";
import type { NextAuthOptions } from "next-auth";
import type { Provider } from "react";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRETS as string,
    }),
  ],
  // pages: {
  //   signIn: "/signIn",
  // },
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        await userCreate(token, session);
      }
      return session;
    },
  },
};

// export const providerMap = options.providers
//   .map((provider) => {
//     return { id: provider.id, name: provider.name };
//   })
//   .filter((provider) => provider.id !== "credentials");
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers,
//   pages: {
//     signIn: "/signIn",
//   },
// });
