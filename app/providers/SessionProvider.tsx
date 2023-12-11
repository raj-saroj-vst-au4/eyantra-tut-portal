"use client";

import { SessionProvider } from "next-auth/react";
import Authentication from "./AuthProvider";
// import { getServerSession } from "next-auth"

type Props = {
  children?: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <Authentication>{children}</Authentication>
    </SessionProvider>
  );
}
