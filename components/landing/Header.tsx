import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Poppins, Open_Sans } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: "#5523E8" }}>
      <div className="h-24 max-w-[1400px] mx-auto relative flex items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            width={52}
            height={52}
            alt="Postify logo"
          />
          <span
            className={`${poppins.className} text-white text-[30px] font-semibold`}
          >
            Postify
          </span>
        </div>

        

<nav
  className={`${openSans.className} hidden md:flex items-center gap-12 text-white text-[17px] font-semibold`}
>
  <Link
    href="/about"
    className="transition-all duration-200 hover:opacity-80 hover:scale-105"
  >
    About
  </Link>

  <Link
    href="/features"
    className="transition-all duration-200 hover:opacity-80 hover:scale-105"
  >
    Features
  </Link>

  <Link
    href="/pricing"
    className="transition-all duration-200 hover:opacity-80 hover:scale-105"
  >
    Pricing
  </Link>

  <Link
    href="/contact"
    className="transition-all duration-200 hover:opacity-80 hover:scale-105"
  >
    Contact
  </Link>
</nav>


        <div className={`${openSans.className} flex items-center gap-4`}>
          
         
          <SignInButton>
            <Button
              variant="ghost"
              className="text-white/90 text-[15px] rounded-[30px]  font-semibold"
            >
              Sign in
            </Button>
          </SignInButton>

       
          <SignUpButton>
            <Button
              className="px-5 py-2 bg-white text-black rounded-[30px] text-[15px] font-semibold hover:bg-gray-100"
            >
              Sign up
            </Button>
          </SignUpButton>

        </div>
      </div>
    </header>
  );
}
