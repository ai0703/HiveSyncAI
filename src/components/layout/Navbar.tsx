"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
    { name: "Solution", href: "#solution" },
    { name: "Company", href: "#company" },
    { name: "Packages", href: "#packages" },
    { name: "Resources", href: "#resources" },
    { name: "Case Studies", href: "#case-studies" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/5 py-4">
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                    >
                        <path
                            d="M12 2L14.5 7H18L15.5 12L18 17H14.5L12 22L9.5 17H6L8.5 12L6 7H9.5L12 2Z"
                            fill="#FBC02D"
                            stroke="#F8FAFC"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-xl font-bold tracking-tight text-white">
                        HiveSync<span className="text-primary">AI</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors flex items-center gap-1"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Area */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium text-slate-300 hover:text-primary">
                        Login
                    </Link>
                    <Button className="bg-primary hover:bg-primary-hover text-secondary font-bold px-6 py-2 rounded-md shadow-md flex items-center gap-2">
                        Get a Demo
                        <Rocket className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#020617] border-b border-white/10 p-4 lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium p-2 text-white hover:bg-white/5 rounded-md"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full bg-primary text-secondary font-bold">Get a Demo</Button>
                </div>
            )}
        </nav>
    );
}
