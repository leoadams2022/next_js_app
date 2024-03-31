import type { Metadata } from "next";
import { Inter, Space_Grotesk as spaceGrotesk } from "next/font/google";
import "./globals.css";
import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGroteskFont = spaceGrotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "app to help you with your coding journey. you can ask questions and get answers",
  icons: {
    icon: "assets/images/site-logo.svg",
  },
};

function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>DevFlow</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover:text-primary-500",
          },
        }}
      >
        <body className={`${inter.variable} ${spaceGroteskFont.variable}`}>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
