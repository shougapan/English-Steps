import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icon library
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 border-b-2 shadow-xl">
      <div className="flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center animate-slide-in-left">
<p className="border-b-2 border-white text-white text-2xl sm:text-4xl font-semibold py-2 shadow-xl">
  English Step<span className="text-orange-500">s</span>
</p>
          <div className="ml-2">
            <Image
              src="/mascot2.png"
              alt="マスコット"
              width={50}
              height={60}
              className="sm:w-[75px] sm:h-[90px]"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="text-white"><Link href="/">ホーム</Link></li>
          <li className="text-white"><Link href="/price">料金</Link></li>
          <li className="text-white"><Link href="/about">会社情報</Link></li>
          <li className="text-white"><Link href="/contact">お問い合わせ</Link></li>
          <li className="bg-orange-500 p-3 rounded shadow font-semibold text-white hover:mb-1">
            <Link href="/contact">無料体験</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li className="text-white"><Link href="/">ホーム</Link></li>
          <li className="text-white"><Link href="/price">料金</Link></li>
          <li className="text-white"><Link href="/about">会社情報</Link></li>
          <li className="text-white"><Link href="/contact">お問い合わせ</Link></li>
          <li className="bg-orange-500 p-3 rounded shadow font-semibold text-white">
            <Link href="/contact">無料体験</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
