"use client"
import Squares from './Squares';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Hero() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    let borderColor = '#e5e7eb';
    let hoverFillColor = '#00ff00';

    if (resolvedTheme === 'dark') {
        borderColor = '#374151';
        hoverFillColor = '#4ade80';
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <div>

            <section className="relative w-full h-[91vh]">
                <div className="absolute inset-0 z-0">
                    <Squares

                        speed={1}

                        squareSize={230}

                        direction='up'

                        borderColor={borderColor}

                        hoverFillColor={hoverFillColor}

                    />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold w-[80vh]">
                        Hello, I'm Theo! A
                        <span className="text-green-400"> Software Developer</span> and <span className="text-green-400">wannabe researcher</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-2xl text-slate-800 dark:text-slate-300">
                        Currently a Computer Science Student, I'm interested in Low Level Programming and Web Development. Looking for a position as an Software Engineering Intern or Researcher!
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="/resume"
                            className="bg-[length:200%_auto] 
                            hover:bg-[position:right_center] 
                            transition-all duration-500 ease-in-out mt-8 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                        >
                            Resume
                        </a>
                        <a
                            href="/contact"
                            className="bg-[length:200%_auto] 
                            hover:bg-[position:right_center] 
                            transition-all duration-500 ease-in-out mt-8 rounded-lg bg-gradient-to-r from-green-400 to-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}