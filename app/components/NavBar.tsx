'use client';

import Link from "next/link";
import { useState, useEffect } from 'react'; // For dynamic header

const NavBar = () => {

const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    // { label: "Projects", href: "/#projects" },
    { label: "Strategy", href: "/#strategy" },
    { label: "Contact", href: "/#contact" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className="w-screen border-b fixed border-slate-700 bg-slate-700/30">
        <div className="flex flex-wrap justify-between container mx-auto p-4">
            <div className="text-lg font-medium">
                <Link href="/">seanchua.dev</Link> 
            </div>
            <ul className="flex gap-5">
                {links.map((link) => (
                    <li key={link.href} className="text-base hover:text-zinc-300 transition duration-500">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar