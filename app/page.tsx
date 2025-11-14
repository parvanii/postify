
import {SignUpButton,SignedOut,SignedIn,SignOutButton} from '@clerk/nextjs'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero';


export default function Home() {
  return (
    <div className="min-h-scree bg-background">
      <Header/>
      <Hero/>
    
    </div>
  );
}