import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers/Provider";
import { Roboto_Serif } from "next/font/google";

const roboto = Roboto_Serif({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Siltie fm radio",
  description:
    "Silte FM - Your go-to radio station for the latest hits, engaging talk shows, and community news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
