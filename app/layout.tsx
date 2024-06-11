import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({ 
  subsets: ['latin'], // Adjust subsets as needed
  weight: ['400', '500', '600', '700'] // Include the weights you'll use
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Sean Chua",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={`${poppins.className} bg-gradient-to-r from-slate-900 to-slate-950`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
