"use client"
import { ThreeDMarquee } from "@/components/ui/shadcn-io/3d-marquee";

const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
];

export default function Projects() {
    return (
        <div>
            <div className="items-center justify-center w-full py-3 text-center mx-auto ">
                <h2 className="text-green text-5xl font-extrabold">
                    Projects I've worked on!
                </h2>
                <p className="mt-6 max-w-2xl text-2xl mx-auto text-slate-800 dark:text-slate-300">
                    In this variety of projects I have worked as Front-End, Back-End, Game-Dev, Artist, Scrum Master, Product Owner.
                </p>
                <div className="flex gap-6 justify-center">
                    <a
                        href="https://www.linkedin.com/in/theodinizv/"
                        className="bg-[length:200%_auto] 
                            hover:bg-[position:right_center] 
                            transition-all duration-500 ease-in-out mt-8 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/theokiwi"
                        className="bg-[length:200%_auto] 
                            hover:bg-[position:right_center] 
                            transition-all duration-500 ease-in-out mt-8 rounded-lg bg-gradient-to-r from-green-400 to-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-600"
                    >
                        GitHub
                    </a>
                </div>
            </div>
            <div>
                <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
                    <ThreeDMarquee images={images} />
                </div>
            </div>
        </div>
    );
}