import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}
