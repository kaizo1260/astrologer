'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Trang Chủ', href: '/' },
    { label: 'Lá Số Tử Vi', href: '/birth-chart' },
    { label: 'Hợp Tuổi', href: '/compatibility' },
    { label: 'Pha Mặt Trăng', href: '/moon-phase' },
    { label: 'Hành Tinh Hiện Tại', href: '/transit' },
  ];

  return (
    <nav className="relative z-50 border-b border-cosmic-border bg-cosmic-card/80 backdrop-blur-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-mystical text-xl font-bold text-cosmic-gold hidden sm:inline">
              Chiêm Tinh Học
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cosmic-text hover:text-cosmic-gold transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cosmic-gold"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-cosmic-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-cosmic-text hover:text-cosmic-gold transition-colors py-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
