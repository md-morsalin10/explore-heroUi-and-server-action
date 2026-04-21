"use client"
import Link from 'next/link';
import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li className={`${pathName==="/" ? 'text-red-500' : ''}`}><Link href="/">Home</Link></li>
                    <li className={`${pathName==="/tasks" ? 'text-red-500' : ''}`}><Link href="tasks">Tasks</Link></li>
                    <li className={`${pathName==="/hero" ? 'text-red-500' : ''}`}><Link href="hero">Hero</Link></li>
                    <li className={`${pathName==="/post" ? 'text-red-500' : ''}`}><Link href="post">Post</Link></li>
                </ul>
                <div>
                    <ThemeSwitch/>
                </div>
            </header>
        </nav>

    );
};

export default Navbar;