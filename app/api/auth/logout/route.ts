import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getIdToken } from "@/app/utils/sessionTokenAccessor";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    const idToken = await getIdToken();

    const url = `${
      process.env.END_SESSION_URL
    }?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL as any
    )}`;

    try {
      const resp = await fetch(url, { method: "GET" });
      return resp;
    } catch (error) {
      console.log(error);
      return new Response({ status: 500 } as any);
    }
  }
  return new Response({ status: 200 } as any);
}
