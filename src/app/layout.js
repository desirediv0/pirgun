import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${PlusJakartaSans.variable} antialiased font-plus-jakarta-sans`}
      >
      <Navbar />
      <main className="md:pl-64">
        <div className="mx-auto">{children}</div>
      </main>
      
      
      </body>
    </html>
  );
}
