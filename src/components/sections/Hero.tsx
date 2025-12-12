"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BeeSwarm } from "@/components/ui/BeeSwarm";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
    const CALENDLY_LINK = "https://calendly.com/alfasamad07/hivesync-ai-ai-growth-consultation";
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Accessibility: Check for prefers-reduced-motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleMotionChange = () => {
            if (videoRef.current) {
                if (mediaQuery.matches) {
                    videoRef.current.pause();
                } else {
                    // Attempt to play if not reduced motion (and likely auto-played already, but good for dynamic changes)
                    videoRef.current.play().catch(() => { /* Autoplay might be blocked, harmless */ });
                }
            }
        };

        // Initial check
        if (mediaQuery.matches && videoRef.current) {
            videoRef.current.pause();
        }

        // Listener (modern browsers)
        mediaQuery.addEventListener('change', handleMotionChange);
        return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#020617]">

            {/* Background Media Container */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen mask-radial-faded"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/hero-hive.jpg" // Using the previous image as poster
                >
                    {/* WebM would go here if available: <source src="/bg-video.webm" type="video/webm" /> */}
                    <source src="/bg-video.mp4" type="video/mp4" />
                </video>

                {/* Fallback Image (optional, but poster covers most cases. 
             If we want strict no-JS fallback, we'd rely on poster or a <noscript> image) */}
            </div>

            {/* Dark Gradient / Glass Overlay to ensure readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 z-0 pointer-events-none" />
            <div className="absolute inset-0 backdrop-blur-[1px] z-0 pointer-events-none" />

            {/* Overlay: Bee Swarm Animation (Particles) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <BeeSwarm />
            </div>

            {/* Foreground Content */}
            <div className="relative z-20 container mx-auto px-4 text-center mt-[30vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="backdrop-blur-md bg-black/40 p-8 rounded-3xl border border-white/10 shadow-2xl inline-block max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-accent mb-6 tracking-tight drop-shadow-sm">
                        Automate Outreach. Book More Meetings.
                    </h1>

                    <div className="mb-8">
                        <p className="text-2xl md:text-3xl text-slate-200 mb-3 font-medium tracking-wide">
                            The hive is working our bees are building the site right now.
                        </p>
                        <p className="text-lg text-slate-400 font-light">
                            If you can’t wait, click Get Started and we’ll get you in early.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={CALENDLY_LINK} target="_blank">
                            <Button size="lg" className="bg-primary hover:bg-primary-hover text-secondary font-bold text-lg px-10 py-6 h-auto rounded-full shadow-[0_0_20px_rgba(251,192,45,0.4)] hover:shadow-[0_0_30px_rgba(251,192,45,0.6)] transition-all transform hover:scale-105 active:scale-95">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade for seamless transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10" />
        </section>
    );
}
