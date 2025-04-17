import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/providers/Provider";
import { Roboto_Serif } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const roboto = Roboto_Serif({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default:"ስልጤ ፍም 96.3",
    template: "%s - ስልጤ ፍም 96.3",
  },
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
          <main className="flex  flex-col ">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="sticky top-0 bg-white z-50">
              <Navbar />
            </div>
            <div className="flex-1 flex-grow overflow-x-hidden min-h-screen">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
