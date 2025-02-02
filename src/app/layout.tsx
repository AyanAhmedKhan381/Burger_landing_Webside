import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../app/components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const barlow_condensed = Barlow_Condensed({
  weight:['300','400','500','600','700','800'],
  subsets:["latin"]
})



export const metadata: Metadata = {
  title: "Burger | A healty Food",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow_condensed.className} ${barlow_condensed.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
