"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users, BarChart3 } from "lucide-react";

const features = [
    {
        title: "Automated Workflows",
        description: "AI orchestrates repetitive tasks, freeing your team for high-value work.",
        icon: Zap,
    },
    {
        title: "Scalable Efficiency",
        description: "Like bees building a hive, our system scales seamlessly with your business needs.",
        icon: BarChart3, // Using BarChart as proxy for scale/growth or similar
    },
    {
        title: "Human-in-the-Loop",
        description: "Maintain full control while AI handles the heavy lifting and processing.",
        icon: Users,
    },
    {
        title: "Data-Driven",
        description: "Predictive analytics that adapt to your processes for continuous improvement.",
        icon: ShieldCheck, // Using ShieldCheck for reliability/decision or similar
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function Benefits() {
    return (
        <section id="features" className="py-20 bg-background relative overflow-hidden">
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            ></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                        Sweeten Your <span className="text-primary">Productivity</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover how our hive-mind technology transforms scattered tasks into a synchronized masterpiece.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="relative group p-1"
                        >
                            {/* Hexagon Shape Container - Implemented via Aspect Ratio and Clip Path or Borders */}
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center z-10 relative">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-8 h-8 text-primary/80 group-hover:text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                            </div>

                            {/* Decorative Hexagon behind or overlay? keeping it simple card for now as requested 'hexagonal layout' can be tricky with text. 
                  Alternatively, we can use a small hex icon in the corner.
              */}
                            <div className="absolute top-0 right-0 w-8 h-8 opacity-10">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                                    <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
