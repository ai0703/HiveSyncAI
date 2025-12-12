"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BeeSwarm } from "@/components/ui/BeeSwarm";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#020617]">

            {/* Background Image Container with Blending */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="relative w-full h-full max-w-[1200px] max-h-[1000px] opacity-80 mix-blend-screen">
                    <Image
                        src="/hero-hive.jpg"
                        alt="AI Beecone Hub"
                        fill
                        className="object-contain object-center mask-radial-faded"
                        priority
                    />
                </div>
            </div>

            {/* Overlay: Bee Swarm Animation (Particles) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <BeeSwarm /> {/* Ensure BeeSwarm is updated to be transparent/fill container */}
            </div>

            {/* Foreground Content */}
            <div className="relative z-20 container mx-auto px-4 text-center mt-[40vh] md:mt-[35vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="backdrop-blur-sm bg-black/30 p-8 rounded-3xl border border-white/10 shadow-2xl inline-block max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-accent mb-6 tracking-tight drop-shadow-sm">
                        AI BEECONE HUB
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
                        The central hive for autonomous digital workers. <br />
                        <span className="text-accent">Synchronize. Optimize. Dominate.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary-hover text-secondary font-bold text-lg px-10 py-6 h-auto rounded-full shadow-[0_0_20px_rgba(251,192,45,0.4)] hover:shadow-[0_0_30px_rgba(251,192,45,0.6)] transition-all transform hover:scale-105">
                            Enter the Hive
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade for seamless transition if content continues */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10" />
        </section>
    );
}
