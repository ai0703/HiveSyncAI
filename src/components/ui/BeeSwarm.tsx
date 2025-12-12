"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 40;

export function BeeSwarm() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        // Client-side only init
        const width = window.innerWidth;
        const height = window.innerHeight;

        const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 5,
            scale: 0.5 + Math.random() * 0.8,
            color: Math.random() > 0.7 ? '#22D3EE' : '#FBC02D', // Mix of Cyan and Yellow
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="w-full h-full overflow-hidden">
            {/* Particles */}
            {particles.map((p) => (
                <Particle key={p.id} config={p} />
            ))}
        </div>
    );
}

function Particle({ config }: { config: any }) {
    // Determine random movement within a range of the start position
    // We want them to drift around

    return (
        <motion.div
            className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
            style={{
                backgroundColor: config.color,
                left: config.x,
                top: config.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                opacity: [0, 0.8, 0.4, 0],
                scale: [0, config.scale, config.scale, 0]
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay,
                times: [0, 0.2, 0.8, 1]
            }}
        />
    )
}
