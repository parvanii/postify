
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero';
import Howdoesitwork from '@/components/landing/Howdoesitwork';
import Foryou from '@/components/landing/Foryou';
import Faq from '@/components/landing/Faq';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-scree bg-background">
      <Header/>
      <Hero/>
      <Howdoesitwork/>
      <Foryou/>
      <Faq/>
      <Footer/>
    
    </div>
  );
}