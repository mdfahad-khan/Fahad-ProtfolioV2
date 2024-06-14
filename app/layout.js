import { Inter, Lato, Pacifico } from "next/font/google";

import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pagewrapper from "./components/PageWrapper/PageWrapper";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  weight: ["400", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});
const pacifico = Pacifico({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});
export const metadata = {
  title: "Fahad Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${pacifico.variable} !scroll-smooth`}>
        <body className={lato.className}>
          <Pagewrapper>
            <Navbar />

            {children}
            <Footer />
          </Pagewrapper>
        </body>
      </html>
    </>
  );
}
