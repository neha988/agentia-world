import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram ,House} from "lucide-react";
import { FloatingDock } from "./footernav";

const Footer = () => {
  return (
    <footer className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 bg-agentia-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold font-space text-white">Agentia<span className="text-gradient-teal-green"> World</span></span>
            </Link>
            <p className="text-sm sm:text-base text-white/70 mb-6 max-w-md">
              The worlds leading marketplace for AI agents. Buy&apos; sell&apos; and customize AI solutions to transform your business.
            </p>
            <div className="flex space-x-2 ">
              <FloatingDock 
                items={[
                  {
                    title: "Home",
                    icon: <House className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>,
                    href: "/"
                  },
                  {
                    title: "GitHub",
                    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>,
                    href: "https://github.com"
                  },
                  {
                    title: "Twitter",
                    icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>, 
                    href: "https://twitter.com"
                  },
                  {
                    title: "LinkedIn",
                    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>,
                    href: "https://linkedin.com"
                  },
                  {
                    title: "Facebook",
                    icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>,
                    href: "https://facebook.com"
                  },
                  {
                    title: "Instagram", 
                    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black hover:text-white"/>,
                    href: "https://instagram.com"
                  }
                ]}
                desktopClassName="hidden sm:flex"
                mobileClassName="flex sm:hidden"
              />
            </div>
          </div>
          
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg sm:text-xl text-white font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#marketplace" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link href="#customize" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Customize</Link>
              </li>
              <li>
                <Link href="#experts" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">AI Experts</Link>
              </li>
              <li>
                <Link href="#testimonals" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Testimonals</Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg sm:text-xl text-white font-bold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/press" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Press</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg sm:text-xl text-white font-bold mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/terms" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/licenses" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Agentia World. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-0 text-center sm:text-left">
            <span className="text-gradient-teal-green">developed by</span> <span className="text-white">Neha khimji & Zainab khimji</span>
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="/terms" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
