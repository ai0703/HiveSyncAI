"use client";

import { motion } from "framer-motion";
import { Search, Settings, Rocket, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "01",
        title: "Identify Tasks",
        description: "We collaborate to map your manual workflows and identify bottlenecks.",
        icon: Search,
    },
    {
        id: "02",
        title: "Configure Hive",
        description: "Our AI learns your processes and configures automated flows.",
        icon: Settings,
    },
    {
        id: "03",
        title: "Deploy & Monitor",
        description: "Automations go live while you monitor performance via dashboard.",
        icon: Rocket,
    },
    {
        id: "04",
        title: "Iterate & Grow",
        description: "The system adapts and scales as your business needs evolve.",
        icon: RefreshCw,
    },
];

export function HowItWorks() {
    return (
        <section id="process" className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        From chaos to clarity in four simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-0 translate-y-4" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="relative z-10 flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none border md:border-none border-slate-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm z-10">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
