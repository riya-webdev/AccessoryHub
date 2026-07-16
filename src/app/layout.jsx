import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import CartProvider from "@/context/CartContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Product",
  description: "Product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
         <CartProvider>          

    <Header />
  <main>
{children}
</main>
<Footer />
  </CartProvider>

      </body>
     
    </html>
  );
}
