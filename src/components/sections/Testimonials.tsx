"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "In design, as in nature, collaboration creates harmony.",
        author: "Charles Eames",
        role: "Design Philosophy",
    },
    {
        quote: "A bee is never as industrious alone as when it’s part of the hive.",
        author: "William Blake", // Often attributed to Blake or Proverb
        role: "Principles of Productivity",
    },
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
        role: "Apple Co-founder",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#FBC02D 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            ></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Words from the <span className="text-primary">Hive</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our philosophy is built on the efficiency of nature and the precision of technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                            <Quote className="w-10 h-10 text-primary mb-6 opacity-50" />
                            <p className="text-lg font-light italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center text-secondary font-bold text-sm">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{t.author}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
