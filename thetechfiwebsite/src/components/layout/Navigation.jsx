import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// LOCKED CONTEXT: Authority Links
const NAV_ITEMS = [
  { id: "roadmaps", label: "Roadmaps", path: "/#roadmaps" }, // Anchor to section
  { id: "resources", label: "Resources", path: "/#resources" },
  { id: "mentorship", label: "Mentorship", path: "/#mentorship" },
  { id: "blog", label: "Blog", path: "https://thetechnologyfiction.com/blog", external: true },
];

const Navigation = ({
  logo = {
    text: "The Technology Fiction", // UPDATED BRANDING
    initials: "TF",
    // Ensure this path matches your public folder
    logo: "/tech_fi_logo_512x512_image.jpeg", 
  },
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. BODY LOCK
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // 3. NAVIGATION HANDLER
  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (item.external) {
      window.location.href = item.path;
      return;
    }

    // If it's a hash link on the homepage
    if (item.path.startsWith("/#")) {
      const elementId = item.path.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(elementId);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(elementId);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.path);
    }
  };

  // ANIMATION VARIANTS
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-primary/90 backdrop-blur-xl border-white/10 py-3" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* LOGO - CLICK TO HOME */}
            <div 
              onClick={() => navigate("/")}
              className="flex items-center gap-3 z-50 relative cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg group-hover:border-accent/50 transition-colors">
                <img
                  src={logo.logo}
                  alt={logo.text}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <span className="text-lg font-heading font-bold tracking-tight text-white hidden md:block group-hover:text-accent transition-colors">
                TheTechnology<span className="text-accent">Fiction</span>
              </span>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  {item.external && <ExternalLink className="inline-block w-3 h-3 ml-1 mb-1 opacity-50" />}
                </button>
              ))}

              {/* PRIMARY CTA - NEWSLETTER / STARTER KIT */}
              <button
                className="group relative px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded-md hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(224,184,76,0.2)]"
              >
                Join Inner Circle
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-white hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-primary md:hidden flex flex-col pt-32 px-6 h-screen overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-8 relative z-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-3xl font-heading font-bold text-left flex items-center justify-between group text-white hover:text-accent"
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.external && <ExternalLink className="w-5 h-5 opacity-50" />}
                  </span>
                  <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 border-t border-white/10 pt-8"
            >
              <button
                className="w-full py-4 bg-accent text-primary font-bold text-lg rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Starter Kit
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;