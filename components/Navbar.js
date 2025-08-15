// Navbar.js
"use client";
import { useContext } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Context } from "@/app/layout"; // adjust path if needed

export default function Navbar() {


  

  return (
    <nav className="flex justify-between bg-blue-500 p-4 border-b-2 shadow-xl">
      <div className="flex items-center animate-slide-in-left">
        <p className="border-b-2 border-l-white text-white text-4xl font-semibold py-2 shadow-xl">
          English Step<span className="text-orange-500">s</span>
        </p>
        <div className="">
          <img className="w-[75px] h-[90px] -ml-2" src="/mascot2.png" alt="マスコット" />
        </div>
      </div>

      <ul className="flex space-x-6 items-center">
        <li className="text-white"><Link href="/">ホーム</Link></li>
        <li className="text-white"><Link href="/price">料金</Link></li>
        <li className="text-white"><Link href="/about">会社情報</Link></li>


      
          <>
            <li className="text-white"><Link href="/contact">お問い合わせ</Link></li>
            <li className="shimmer-effect-orange shimmer-orange bg-orange-500 p-3 rounded shadow border-gray-100 font-semibold text-white hover:mb-1">
              <Link href="/contact">無料体験</Link>
            </li>
          </>
      </ul>
    </nav>
  );
}
