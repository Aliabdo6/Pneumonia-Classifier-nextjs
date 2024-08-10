import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pneumonia Classifier with Next.js",
  description:
    "Welcome to the Pneumonia Classifier project! This application is designed to predict the likelihood of pneumonia from chest X-ray images using a machine learning model. The frontend is built with Next.js, and the app utilizes Clerk for user authentication, providing a secure and user-friendly interface for interacting with the model.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className=" py-8 ">
            <Navbar />
          </div>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
