import Image from "next/image";
import Link from "next/link";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer() {
  return (
    <footer
      className="w-full text-white py-14"
      style={{ backgroundColor: "#5523E8" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
    
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Postify Logo" width={52} height={52} />
            <span
              className={`${poppins.className} text-white text-[28px] font-semibold`}
            >
              Postify
            </span>
          </div>

          <p className="text-white/85 mt-4 text-[15px] leading-relaxed max-w-xs">
            Your AI-powered content assistant — helping you create captions,
            ideas, scripts, blogs and more in seconds.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className={`${openSans.className} space-y-3 text-white/85 text-[15px]`}>
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-white">Features</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className={`${openSans.className} space-y-3 text-white/85 text-[15px]`}>
            <li>
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="mt-8 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Postify — All rights reserved.
      </div>
    </footer>
  );
}
