// Your page file, for example: src/app/page.tsx

import Header from '@/components/Header'; // It's best practice to use the '@/' alias
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
      </main>
    </div>
  );
}