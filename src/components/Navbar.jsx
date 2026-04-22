import React, { useState, useEffect } from "react";

export default function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      {/* PREMIUM ANNOUNCEMENT BAR */}
      {/* IBM CARBON ANNOUNCEMENT BAR */}
      <div style={{ 
        background: "var(--carbon-gray-10)", height: 32, width: "100%", zIndex: 2000, 
        position: "fixed", top: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--carbon-gray-100)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5,
        borderBottom: "1px solid var(--carbon-border)"
      }}>
         <span style={{ marginRight: 12, background: "var(--carbon-blue-60)", color: "white", padding: "2px 8px", borderRadius: 0 }}>V11.4 PROMO</span> 
         SECURE ENTERPRISE ACCESS FOR ₹30/MO ACTIVE NOW!
      </div>

      <nav style={{
        position: "fixed", top: 32, left: 0, right: 0, zIndex: 1000,
        height: 64,
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--carbon-border)" : "none",
        display: "flex", alignItems: "center", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <div className="c-container" style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* LOGO (Sharp Carbon Style) */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{
              width: 28, height: 28, background: "var(--carbon-gray-100)", borderRadius: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 700, fontSize: 11
            }}>EL</div>
            <span style={{ fontSize: 18, fontWeight: 400, color: scrolled ? "var(--carbon-gray-100)" : "white", letterSpacing: "-0.01em" }}>
              EL-FRS <span style={{ color: "var(--carbon-blue-60)" }}>HMIS</span>
            </span>
          </a>

          {/* MAIN NAVIGATION */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-items">
            {["Platform", "Features", "Pricing", "Careers"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                fontSize: 13, fontWeight: 400, color: scrolled ? "var(--carbon-gray-100)" : "rgba(255,255,255,0.7)", textDecoration: "none", transition: "0.2s",
                letterSpacing: 0.5
              }}
                onMouseEnter={e => e.target.style.color = "var(--carbon-blue-60)"}
                onMouseLeave={e => e.target.style.color = scrolled ? "var(--carbon-gray-100)" : "rgba(255,255,255,0.7)"}
              >
                {item}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div style={{ display: "flex", gap: 1, alignItems: "center", background: scrolled ? "var(--carbon-border)" : "transparent" }}>
             <button 
               onClick={openModal}
               style={{ 
                 background: "transparent", border: "none", cursor: "pointer",
                 fontSize: 13, fontWeight: 400, color: scrolled ? "var(--carbon-gray-100)" : "white", padding: "0 16px",
                 height: 40
               }}
             >Request Demo</button>
             <a href="#pricing" style={{ 
               padding: "0 24px", fontSize: 13, height: 40, borderRadius: 0,
               background: "var(--carbon-blue-60)", color: "white", textDecoration: "none",
               display: "flex", alignItems: "center", fontWeight: 700
             }}>
               Claim Deal
             </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) { .nav-items { display: none !important; } }
        `}</style>
      </nav>
    </>
  );
}

