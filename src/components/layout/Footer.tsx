import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold tracking-tight text-secondary">
                                HiveSync<span className="text-primary">AI</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-xs">
                            Orchestrating digital workflows with the natural efficiency of a hive.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-secondary mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-primary">Enterprise</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-secondary mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-secondary transition-colors">
                                <Twitter size={16} />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-secondary transition-colors">
                                <Linkedin size={16} />
                            </Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-secondary transition-colors">
                                <Mail size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} HiveSyncAI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-secondary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-secondary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
