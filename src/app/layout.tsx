import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import NewNavBar from "./components/NewNavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Databases",
  description: "Database Collections with Different Data Inputs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewNavBar/>
        <PageContainer>
        {children}
        </PageContainer>
        <Footer/>
        </body>

    </html>
  );
}
