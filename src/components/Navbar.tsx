import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { siteConfig } from "../data/site";
import { navigation } from "../data/navigation";
import { useLanguage } from "../context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { SearchModal } from "./SearchModal";
import { cn } from "../utils/cn";

export function Navbar() {
  const { tr, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div
          className={cn(
            "mx-4 flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 transition-all duration-500",
            scrolled
              ? "border-ink/10 bg-paper/80 py-2 shadow-lg shadow-ink/5 backdrop-blur-xl dark:border-paper/10 dark:bg-ink/70"
              : "border-transparent bg-transparent py-3"
          )}
        >
          <Link to="/" className="flex items-center gap-2.5" data-cursor="Home">
            <img src={siteConfig.logo} alt={siteConfig.name} className="h-8 w-8 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">{siteConfig.bengaliName}</span>
              <span className="font-en text-[9px] uppercase tracking-[0.3em] text-ink/50 dark:text-paper/50">
                {siteConfig.name}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                    isActive ? "text-ink dark:text-paper" : "text-ink/55 hover:text-ink dark:text-paper/55 dark:hover:text-paper"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {tr(item.label)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gold"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label={t("nav.search")}
              className="hidden h-8 w-8 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/5 hover:text-ink sm:flex dark:text-paper/60 dark:hover:bg-paper/10 dark:hover:text-paper"
            >
              <Search size={16} />
            </button>
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 lg:hidden dark:border-paper/10"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col bg-paper text-ink dark:bg-ink dark:text-paper lg:hidden"
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="text-sm font-semibold">{siteConfig.bengaliName}</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-paper/10"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col justify-center gap-1 px-8">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-2.5 text-3xl font-medium tracking-tight",
                        isActive ? "text-gold" : "text-ink dark:text-paper"
                      )
                    }
                  >
                    {tr(item.label)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center justify-between gap-3 border-t border-ink/10 px-8 py-6 dark:border-paper/10">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
