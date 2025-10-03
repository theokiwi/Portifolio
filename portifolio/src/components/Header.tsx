"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ];
  return (
    <nav className="flex gap-80 justify-center items-center text-base py-3">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-11 h-11 items-center justify-center rounded-full overflow-hidden">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center leading-tight">
          <span className="font-bold text-lg">Theo Diniz</span>
          <span className="text-sm dark:text-neutral-400 text-slate-800"
                >Computer Scientist</span>
        </div>
      </Link>



      <ul className="justify-center flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
          transition-colors duration-300
          ${pathname === link.href
                  ? 'text-black dark:text-white underline decoration-2 underline-offset-5'
                  : 'text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white'
                }
        `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="">
        <Link
          href="/contact"
          className="
    flex items-center gap-2
    font-bold text-white
    px-4 py-2 rounded-lg
    
    bg-gradient-to-r from-green-400 to-green-800

    bg-[length:200%_auto] 
    hover:bg-[position:right_center] 
    transition-all duration-500 ease-in-out
  "
        >
          Contact
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );

}
