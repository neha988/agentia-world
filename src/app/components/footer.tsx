import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-agentia-dark-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold font-space text-gradient-blue-purple">Agentia</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              The world's leading marketplace for AI agents. Buy, sell, and customize AI solutions to transform your business.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link >
              <Link  
                href="#" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link >
              <Link  
                href="#" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link >
              <Link  
                href="#" 
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link >
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link  href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-white/70 hover:text-white transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link href="/customize" className="text-white/70 hover:text-white transition-colors">Customize</Link>
              </li>
              <li>
                <Link href="/experts" className="text-white/70 hover:text-white transition-colors">AI Experts</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/press" className="text-white/70 hover:text-white transition-colors">Press</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/licenses" className="text-white/70 hover:text-white transition-colors">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Agentia World. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
