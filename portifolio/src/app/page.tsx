// Your page file, for example: src/app/page.tsx

import Header from '@/components/Header'; 
import Hero from '@/components/Hero';
import WhyMe from '@/components/WhyMe'
export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <WhyMe/>
      </main>
    </div>
  );
}