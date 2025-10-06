"use client"
import Header from '@/components/Header'; 
import Hero from '@/components/Hero';
import WhyMe from '@/components/WhyMe'
import Projects  from '@/components/Projects'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <WhyMe/>
        <Projects/>
        <Feedback/>
        <Footer/>
      </main>
    </div>
  );
}