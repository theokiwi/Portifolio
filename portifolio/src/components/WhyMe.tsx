"use client"
import SpotlightCard from './SpotlightCard';
// Import the chosen icons from lucide-react, adding Gamepad2
import { Layers, Users, BrainCircuit, Palette, GraduationCap, Gamepad2 } from 'lucide-react';

export default function WhyMe() {
    return (

        <div className="py-3">
            <div className="items-center justify-center w-full py-10 text-center mx-auto ">
                <h2 className="text-green py-1 text-5xl font-extrabold">
                    Why hire me?
                </h2>
                <p className="mt-6 py-1 max-w-2xl text-2xl mx-auto text-slate-800 dark:text-slate-300">
                    My focus is on translating complex challenges into high-quality, valuable outcomes.
                    As a dedicated and <span className="
                        bg-gradient-to-r from-green-500 to-green-600
                        bg-no-repeat [background-position:0_100%]
                        bg-[length:100%_10%]
                        hover:bg-[length:100%_100%]
                        transition-all duration-300 ease-out
                        py-0.5 px-1 rounded-sm
                        text-slate-900 dark:text-white
                    ">adaptable professional</span>, I am committed to excellence in every project.
                </p>
            </div>
            <div className="py-1 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <Layers className="w-8 h-8 text-green-400" />
                            <h2 className="text-2xl font-bold text-neutral-50">
                                From Figma to Full-Stack
                            </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Currently developing at a Junior Enterprise. I build full projects, from UI/UX design in Figma to front-end implementation.
                        </p>
                    </div>
                </SpotlightCard>
                 <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                           <Users className="w-8 h-8 text-green-400" />
                           <h2 className="text-2xl font-bold text-neutral-50">
                                Experienced Agile Leadership
                           </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Proven experience with agile methodologies, having served as a Scrum Master and Product Owner in multiple team projects.
                        </p>
                    </div>
                </SpotlightCard>
                <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <BrainCircuit className="w-8 h-8 text-green-400" />
                            <h2 className="text-2xl font-bold text-neutral-50">
                                Knowledge Beyond Frameworks
                            </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Modern Front-End (React, Next.js, TypeScript, Tailwind) grounded in solid CS foundations (Java, C++, C).
                        </p>
                    </div>
                </SpotlightCard>
                <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <Palette className="w-8 h-8 text-green-400" />
                            <h2 className="text-2xl font-bold text-neutral-50">
                                UI/UX Designer
                            </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Skilled in creating wireframes and prototypes in Figma, focusing on visual identity and user-centered UI/UX principles.
                        </p>
                    </div>
                </SpotlightCard>
                <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <GraduationCap className="w-8 h-8 text-green-400" />
                            <h2 className="text-2xl font-bold text-neutral-50">
                                Academically Curious
                            </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Passionate about research and academic writing. Fluent in English (C2) and a Teaching Assistant for Algorithms & Data Structures.
                        </p>
                    </div>
                </SpotlightCard>
                 <SpotlightCard
                    spotlightColor="rgba(52, 211, 153, 0.15)"
                    className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full h-full"
                >
                    <div className="text-left">
                        <div className="flex items-center gap-4">
                            <Gamepad2 className="w-8 h-8 text-green-400" />
                            <h2 className="text-2xl font-bold text-neutral-50">
                                Creative & Technical Versatility
                            </h2>
                        </div>
                        <p className="mt-4 text-base text-neutral-400">
                            Developed multiple games (Arcade, Runner, Simulator) using C# in Unity, acting as both a programmer and an artist with Blender.
                        </p>
                    </div>
                </SpotlightCard>
            </div>

        </div>
    );
}