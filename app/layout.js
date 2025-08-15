"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {



    


  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>

        <Navbar />
          {children}
     
<div className="my-8">
  {/* Divider */}
  <hr className="w-48 h-1 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700" />

  {/* Contact Section */}
  <div className="text-center mt-6">
    <h2 className="text-4xl font-extrabold text-neutral-800 mb-4">
      Contact
    </h2>

    {/* Phone & Email */}
    <p className="text-xl text-gray-700 mb-1">
      ☎ <span className="font-medium">080-7834-9350</span>
    </p>
    <p className="text-xl text-gray-700 mb-3">
      ✉ <span className="font-medium">englishsteps20@gmail.com</span>
    </p>

    {/* LINE QR Code */}
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-1" style={{ color: "#06C755" }}>
        LINE:
      </p>
      <img
        src="/line.jpg"
        alt="LINE QR Code"
        className="w-28 h-28 rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform duration-200"
      />
    </div>
  </div>
</div>


      

        <Toaster />
      </body>
    </html>
  );
}


