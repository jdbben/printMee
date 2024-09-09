import type { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRETS as string
        })
        ,
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "your username" },

            },
            authorize: function (credentials: Record<"username", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) return user
                else return null

                throw new Error("Function not implemented.");
            }
        })
    ],

}