"use client";
import React from "react";
import {
  IconBell,
  IconHome,
  IconFlag3,
  IconTrophy,
  IconReport,
  IconUsers,
  IconInfoCircle,
  IconArrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export function CyberGlassNavbar({
  logo = "/logo2.png",
  className,
}) {
  const links = [
    { label: "Home", href: "#", Icon: IconHome },
    { label: "Programs", href: "#", Icon: IconFlag3 },
    { label: "Leaderboard", href: "#", Icon: IconTrophy },
    { label: "Reports", href: "#", Icon: IconReport },
    { label: "Hackers", href: "#", Icon: IconUsers },
    { label: "About", href: "#", Icon: IconInfoCircle },
  ];

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const eased = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), {
    stiffness: 120,
    damping: 20,
  });

  // Only width changes
  const navWidth = useTransform(eased, [0, 1], ["min(760px,92%)", "min(1100px,92%)"]);

  return (
    <motion.nav
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto flex items-center justify-between",
        "rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-[0_8px_36px_rgba(255,255,255,0.06)]",
        className,
      )}
      style={{
        width: navWidth,
        padding: "12px 20px", // fixed padding (height doesn't change)
      }}
      aria-label="Primary"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div
          style={{ width: 42, height: "auto" }}
        >
          <img src={logo} alt="logo" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Center: Nav links */}
      <ul className="hidden md:flex items-center gap-6">
        <svg className="absolute h-0 w-0">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className={cn(
                "group relative inline-flex h-11 w-11 items-center justify-center",
                "rounded-full text-white/80 transition-colors hover:text-white"
              )}
              style={{ filter: "url(#goo)" }}
            >
              <span
                className={cn(
                  "absolute inset-0 -z-10 scale-75 rounded-full bg-white/10 backdrop-blur-md opacity-0",
                  "transition-all duration-300 group-hover:scale-100 group-hover:opacity-100",
                  "ring-1 ring-white/10"
                )}
              />
              <Icon size={18} stroke={1.75} />
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Bell + Button */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className={cn(
            "relative grid h-10 w-10 place-items-center rounded-full",
            "border border-white/10 bg-white/10 backdrop-blur-md text-white/90",
            "transition hover:text-white hover:border-white/20",
          )}
        >
          <IconBell size={18} />
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white/80" />
          </span>
        </button>

        <a
          href="#"
          className={cn(
            "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2",
            "text-sm font-medium text-black",
            "bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md",
            "border border-white/20 shadow-[0_10px_30px_rgba(255,255,255,0.08)]",
          )}
        >
          <span className="relative z-10">Get Started</span>
          <IconArrowRight size={16} className="relative z-10" />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </div>
    </motion.nav>
  );
}
