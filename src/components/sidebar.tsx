'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaGoogle, FaGithub, FaEnvelope } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const sidebarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/blog" },
  // { name: "Gallery", href: "/gallery" },
  { name: "People", href: "/people" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-sm sm:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-200 ease-in-out sm:relative sm:transform-none sm:w-44 sm:border-r sm:border-gray-100",
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        )}
      >
        <div className="sticky top-0 flex h-full flex-col justify-between py-2">
          {/* Logo and Navigation */}
          <div>
            <Link 
              href="/" 
              className="flex items-center px-5 pt-6 pb-10"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="/LARALOGO.png" 
                alt="LARA Lab" 
                className="h-10 object-contain"
              />
            </Link>
            
            <nav className="space-y-1 px-2 mb-8">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2 text-[13px] transition-all duration-200 rounded-md",
                    "hover:scale-105 hover:bg-gray-50",
                    pathname === link.href 
                      ? "text-black font-medium bg-gray-50" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Footer Links */}
          <div className="space-y-8 px-5 pb-6">
            {/* Minimal Callout */}
            <a 
              href="https://drive.google.com/file/d/1PuFn_1D4t18b7H_9VPRS3ilNOY-dlGjO/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[11px] text-gray-400 hover:text-gray-900 transition-colors"
            >
              <span>View brand guidelines</span>
              <ArrowRight size={10} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110 duration-200"
                aria-label="Google Scholar"
              >
                <FaGoogle size={15} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110 duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="mailto:isoltani@ucdavis.edu"
                className="text-gray-400 hover:text-gray-900 transition-all hover:scale-110 duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 