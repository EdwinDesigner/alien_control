import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connect } from "@/db/dbConnection";
import User from "@/models/User";

declare module "next-auth" {
  interface Session {
    user: {
      fullname: string;
      cedula: string;
      role: string;
      isAdmin: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    user: {
      fullname: string;
      cedula: string;
      role: string;
      isAdmin: boolean;
    };
  }

  interface User {
    fullname: string;
    cedula: string;
    role: string;
    isAdmin: boolean;
  }
}

declare module "next-auth" {
  interface User {
    fullname: string;
    cedula: string;
    role: string;
    isAdmin: boolean;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        cedula: {
          label: "Cédula",
          type: "number",
          placeholder: "Ej: 35864531",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "Escribe tu contraseña",
        },
      },
      async authorize(credentials, req) {
        await connect();
        const userFound = await User.findOne({
          cedula: credentials?.cedula,
        }).select("+password");

        if (credentials?.password.length! < 8) throw new Error("La contraseña debe tener al menos 8 caracteres");

        if (!userFound) throw new Error("Cédula o contraseña incorrecta");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error("Cédula o contraseña incorrecta");

        const { fullname, cedula, role, isAdmin } = userFound;

        const user = {
          fullname,
          cedula,
          role,
          isAdmin
        };

        return JSON.parse(JSON.stringify(user));
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user, trigger, session }) {

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case 'credentials':
            token.user = user as {
              fullname: string;
              cedula: string;
              role: string;
              isAdmin: boolean;
            };
            break;
        }

      }

      if(trigger === "update") {
        return { ...token, ...session }
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.user as {
        fullname: string;
        cedula: string;
        role: string;
        isAdmin: boolean;
      };
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };