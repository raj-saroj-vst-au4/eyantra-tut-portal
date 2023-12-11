import { useSession } from "next-auth/react";
import { signInWithKeycloak } from "../utils/auth";

export default function Authentication({ children }: { children: any }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return "Loading...";
  }
  if (status === "unauthenticated" || !session) {
    signInWithKeycloak();
  }

  return (
    <>
      {children}
      {status}
    </>
  );
}
