import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { Providers } from "./providers";
import Body from "./body";
import React from 'react';
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corretto Coffee",
  description: "Corretto Coffee",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Providers>
          <Header />
          <Body />
          <main className="layout-grid">
            {children}
          </main>
        </Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}