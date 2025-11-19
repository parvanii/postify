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
            
              className="cursor-pointer transition-all 
              bg-white text-black px-6 py-2 rounded-full
              border-black
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            
            >
              Sign in
            </Button>
          </SignInButton>

       
          <SignUpButton>
            <Button
              variant="ghost"
              className="cursor-pointer transition-all 
              bg-white text-black px-6 py-2 rounded-full
              border-black
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
         
            >
              Sign up
            </Button>
          </SignUpButton>

        </div>
      </div>
    </header>
  );
}
